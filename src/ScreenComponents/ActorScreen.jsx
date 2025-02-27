import React from 'react'
import { TableActor } from '../Components/TableActor'
import { FormActor } from '../Components/FormActor'

export const ActorScreen = () => {
  return (
    <>
        <main className='container mt-5' >
            <h1>Actors</h1>
            <TableActor/>
            <FormActor/>
        </main>
    </>
  )
}