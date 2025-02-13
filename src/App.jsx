import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import { Header } from './Components/Header'
// import Aboutus from './Components/Aboutus'
import { ArrayDemo } from './Components/ArrayDemo'
import { Employee } from './Components/Employee'
import Players from './Components/Players'
import { Cities } from './Components/cities'
import { UseSDemo } from './Components/UseSDemo'
import LoadingDemo from './Components/LoadingDemo'
import { UserInput } from './Components/UserInput'
import { Navbar } from './Components/Slick/Navbar'
import SlickHome from './Components/slick/SlickHome'
import { Route , Routes } from 'react-router-dom'
import { SlickAbout } from './Components/slick/slickAbout'
import Error from './Components/slick/Error'
import { Play } from './Components/slick/Play'
import Form1 from './Components/forms/Form1'
import { Term } from './Components/forms/Term'

// import './App.css'

function App() {
  return (
  
  <>  
      <Navbar />
     
    <Routes>
        <Route path='/' element=<SlickHome /> />
        <Route path='/shop' element=<SlickAbout/> />
        <Route path='/*' element=<Error /> />
        <Route path='/play/:id' element=<Play/>/>
        <Route path='/form1' element=< Form1 />/>
        <Route path='/term' element = <Term/>/>
    </Routes>
    </>
  )
}

export default App
