import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Models from './pages/Models'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'

const App = () => {

  
  return (
  

      

      <div >

        <FullScreenNav/>
       <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/models' element={<Models/>} />
      </Routes>
      </div>

  )
}

export default App