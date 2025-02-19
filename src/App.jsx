import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'  
import { MovieScreen } from '../ScreenComponents/MovieScreen'
import { ActorScreen } from '../ScreenComponents/ActorScreen'
import { EarningScreen } from '../ScreenComponents/EarningScreen'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<MovieScreen/>} ></Route>
          <Route path='/actor'  element={<ActorScreen/>} ></Route>
          <Route path='/earning'  element={<EarningScreen/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App