import React from 'react'
import { TableMovie } from '../Components/TableMovie'
import { FormMovie } from '../Components/FormMovie'

export const MovieScreen = () => {
  return (
    <>
        <main className='container mt-5' >
            <h1>Movies</h1>
            <TableMovie/>
            <FormMovie/>
            
        </main>
    </>
  )
}