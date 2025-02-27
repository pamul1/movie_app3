import React from 'react'
import { useState } from 'react'

export const FormEarning = () => {

    const [movie_id, setMovie_id] = useState("")
    const [country, setCountry] = useState("")
    const [revenue, setRevenue] = useState ("")

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "earnings"

    const movie_idHandler = (event) => {
        setMovie_id(event.target.value)
    }

    const countryHandler = (event) => {
        setCountry(event.target.value)
    }

    const revenueHandler = (event) => {
        setRevenue(event.target.value)
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        const newUrl = `${baseUrl}${endPoint}`

        const earning = {
            movie_id, 
            country,
            revenue
        }

        const result = await fetch(newUrl, {
            method : "POST", 
            headers: {
                'Content-Type' : "application/json"
            }, 
            body : JSON.stringify(earning)
        })

        window.location = "/"


    }

    return (
        <>
        <div className="card p-3 mb-5">
            <form onSubmit={submitHandler}>
               
                <div className="mb-3">
                    <label className="form-label">Id Movie</label>
                    <input className="form-control" type="number" onChange={movie_idHandler} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Country</label>
                    <input className="form-control" type="text" onChange={countryHandler} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Revenue</label>
                    <input className="form-control" type="number" onChange={revenueHandler} />
                </div>
                <button type='submit' className='btn btn-primary w-100' >Add</button>
            </form>
            </div>
        </>
    )
}