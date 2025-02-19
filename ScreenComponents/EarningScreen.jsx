import React from 'react'
import { TableEarning } from '../Components/TableEarning'
import { FormEarning } from '../Components/FormEarning'

export const EarningScreen = () => {
  return (
    <>
        <main className='container mt-5' >
            <h1>Earnings</h1>
            <TableEarning/>
            <FormEarning/>
            
        </main>
    </>
  )
}