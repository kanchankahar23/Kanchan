import { useState } from 'react'
import Navbar from './componants/Navbar'
import Hero from './componants/Hero'
import About from './componants/About'
import Skill from './componants/Skill'
import Projects from './componants/Projects'
function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Skill/>
     <Projects/>
    </>
  )
}


export default App
