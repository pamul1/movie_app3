import React from 'react'
import { useEffect, useState } from 'react'

export const TableEarning = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "actors"
    const [earning, setEarning] = useState([])

    const getEarnings = async () => {

        const url = `${baseUrl}${endPoint}`
        const result = await fetch(url)
        const data = await result.json()
        setEarning(data)
    }

    const handleDelete = async (id) => {
        const url = `${baseUrl}${endPoint}/${id}`
        const result = await fetch(url, {
            method: "DELETE"
        })
    
        getEarnings()
    }

    useEffect(() => {
        getEarnings()
    }, [])

    return (
        <>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Movie_id</th>
                        <th>Country</th>
                        <th>Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        earning.map((item) => (
                            <tr key={item.earning_id}>
                                <td>{item.country}</td>
                                <td>{item.revenue}</td>
                                <td> <button className='btn btn-danger' onClick={ ()=>{
                                    handleDelete(item.earning_id)
                                }  } >Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}