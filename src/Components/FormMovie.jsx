import React from 'react'
import { useState } from 'react'

export const FormMovie = () => {

    const [title, setTitle] = useState("")
    const [release_year, setRelease_year] = useState("")
    const [genre, setGenre] = useState ("")
    const [duration, setDuration] = useState("")

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "movies"

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }

    const release_yearHandler = (event) => {
        setRelease_year(event.target.value)
    }

    const genreHandler = (event) => {
        setGenre(event.target.value)
    }

    const durationHandler = (event) => {
        setDuration(event.target.value)
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        const newUrl = `${baseUrl}${endPoint}`

        const movie = { 
            title,
            release_year,
            genre,
            duration
        }

        const result = await fetch(newUrl, {
            method : "POST", 
            headers: {
                'Content-Type' : "application/json"
            }, 
            body : JSON.stringify(movie)
        })

        window.location = "/"


    }

    return (
        <>
        <div className="card p-3 mb-5">
            <form onSubmit={submitHandler}>
        
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input className="form-control" type="text" onChange={titleHandler} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Release_year</label>
                    <input className="form-control" type="number" onChange={release_yearHandler} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Genre</label>
                    <input className="form-control" type="text" onChange={genreHandler} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Duration</label>
                    <input className="form-control" type="number" onChange={durationHandler} />
                </div>
                <button type='submit' className='btn btn-primary w-100' >Add</button>
            </form>
            </div>
        </>
    )
}