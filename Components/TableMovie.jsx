import React from 'react'
import { useEffect, useState } from 'react'

export const TableMovie = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "movies"
    const [movie, setMovie] = useState([])

    const getMovies = async () => {

        const url = `${baseUrl}${endPoint}`
        const result = await fetch(url)
        const data = await result.json()
        setMovie(data)
    }

    const handleDelete = async (id) => {
        const url = `${baseUrl}${endPoint}/${id}`
        const result = await fetch(url, {
            method: "DELETE"
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
                        movie.map((item) => (
                            <tr key={item.movie_id}>
                                <td>{item.title}</td>
                                <td>{item.release_year}</td>
                                <td>{item.genre}</td>
                                <td>{item.duration}</td>
                                <td> <button className='btn btn-danger' onClick={ ()=>{
                                    handleDelete(item.movie_id)
                                }  } >Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
