import React from 'react'
import "./App.css"
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Porfolio from './components/portfolio/Porfolio'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'


const App = () => {
  return (
    <>
      <Header/>
      
      <main className='main'>
      <Home />
        <About />
        <Skills />
        <Services />
        <Porfolio />
        <Contact/>
      </main>
    </>
  )
}

export default App