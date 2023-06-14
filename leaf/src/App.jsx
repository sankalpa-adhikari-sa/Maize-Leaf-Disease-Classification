import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './Pages/Home'
import NavBar from './UI/NavBar'
import Prediction from './Pages/Prediction'


function App() {


  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/prediction' element={<Prediction/>}/>
  
      </Routes>
      
    </>
  )
}

export default App
