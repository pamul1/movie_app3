import React from 'react'
import { useEffect, useState } from 'react'

export const TableEarning = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "earnings"
    const [earning, setEarning] = useState([])

    const getEarning = async () => {

        const url = `${baseUrl}${endPoint}`
        const token = localStorage.getItem("movie-credential");
        const result = await fetch(url, {
            method: "GET",
            headers: {
                'Authorization': token
            }

        })
        const data = await result.json()
        setEarning(data)
    }

    const token = localStorage.getItem("movie-credential")
    const handleDelete = async (id) => {
        const url = `${baseUrl}${endPoint}/${id}`
        const result = await fetch(url, {
            method: "DELETE",
            headers:{
                'Authorization': token
            }
        })
        if (result.ok) {
            const data = await result.json()
            getEarning()
        } else {
            const data = await result.json()
            console.log(data)
            console.log("Something went wrong")
        }


    }

    useEffect(() => {
        getEarning()
    }, [])

    return (
        <>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Movie_id</th>
                        <th>Country</th>
                        <th>Revenue</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        earning.map((item) => (
                            <tr key={item.earning_id}>
                                <td>{item.movie_id}</td>
                                <td>{item.country}</td>
                                <td>{item.revenue}</td>
                                <td> <button className='btn btn-danger' onClick={() => {
                                    handleDelete(item.earning_id)
                                }} >Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}