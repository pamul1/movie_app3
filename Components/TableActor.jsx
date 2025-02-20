import React from 'react'
import { useEffect, useState } from 'react'

export const TableActor = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "actors"
    const [actor, setActor] = useState([])

    const getActor = async () => {

        const url = `${baseUrl}${endPoint}`
        const result = await fetch(url)
        const data = await result.json()
        setActor(data)
    }

    const handleDelete = async (id) => {
        const url = `${baseUrl}${endPoint}/${id}`
        const result = await fetch(url, {
            method: "DELETE"
        })
    
        getActor()
    }

    useEffect(() => {
        getActor()
    }, [])

    return (
        <>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>date_of_birth</th>
                        <th>nationality</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        actor.map((item) => (
                            <tr key={item.actor_id}>
                                <td>{item.name}</td>
                                <td>{item.date_of_birth}</td>
                                <td>{item.nationality}</td>
                                <td> <button className='btn btn-danger' onClick={ ()=>{
                                    handleDelete(item.actor_id)
                                }  } >Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
