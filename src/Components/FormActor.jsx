import React from 'react'
import { useState } from 'react'

export const FormActor = () => {

    const [name, setName] = useState("")
    const [date_of_birth, setDate_of_birth] = useState("")
    const [nationality, setNationality] = useState ("")

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "actors"

    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const date_of_birthHandler = (event) => {
        setDate_of_birth(event.target.value)
    }

    const nationalityHandler = (event) => {
        setNationality(event.target.value)
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        const newUrl = `${baseUrl}${endPoint}`

        const actor = {
            name,
            date_of_birth,
            nationality
        }

        const result = await fetch(newUrl, {
            method : "POST", 
            headers: {
                'Content-Type' : "application/json"
            }, 
            body : JSON.stringify(actor)
        })

        window.location = "/"


    }

    return (
        <>
        <div className="card p-3 mb-5">
            <form onSubmit={submitHandler}>
            
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input className="form-control" type="text" onChange={nameHandler} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Date_of_birth</label>
                    <input className="form-control" type="date" onChange={date_of_birthHandler} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nationality</label>
                    <input className="form-control" type="text" onChange={nationalityHandler} />
                </div>
                <button type='submit' className='btn btn-primary w-100' >Add</button>
            </form>
            </div>
        </>
    )
}