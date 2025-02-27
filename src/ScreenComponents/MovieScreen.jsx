import React from 'react'
import { TableMovies } from '../Components/TableMovie'
import { FormMovies } from '../Components/FormMovie'

export const MovieScreen = () => {
  return (
    <>
        <main className='container mt-5' >
            <h1>Movies</h1>
            <TableMovies/>
            <FormMovies/>
            
        </main>
    </>
  )
}