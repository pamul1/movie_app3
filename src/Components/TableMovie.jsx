import React from 'react'
import { useEffect, useState } from 'react'

export const TableMovie = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "movies"
    const [movies, setMovies] = useState([])

    const getMovies = async () => {

        const token = localStorage.getItem("movie-credential")
        const url = `${baseUrl}${endPoint}`
        const result = await fetch(url)

        if (result.ok) {
            const data = await result.json()
            setMovies(data)
        } else {
            const err = await result.json()
            console.log("Error Fetching Movies")
            console.log(err)
        }

    }

    const token = localStorage.getItem("movie-credential")
    const handleDelete = async (id) => {
        const url = `${baseUrl}${endPoint}/${id}`
        const result = await fetch(url, {
            method: "DELETE",
            headers: {
                'Authorization': token
            }
        })

        getMovies()
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>release_year</th>
                        <th>genre</th>
                        <th>duration</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map((item) => (
                            <tr key={item.movie_id}>
                                <td>{item.title}</td>
                                <td>{item.release_year}</td>
                                <td>{item.genre}</td>
                                <td>{item.duration}</td>
                                <td> <button className='btn btn-danger' onClick={() => {
                                    handleDelete(item.movie_id)
                                }} >Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
