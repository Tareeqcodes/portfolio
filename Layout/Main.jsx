import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import About from '../src/components/About'
import Skills from '../src/components/Skills'
import Tools from '../src/components/Tools'
import Project from '../src/components/Project'
import Header from '../src/components/Header'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'


const Main = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Tools />
        <Project />
        <Header />
        <Contact />
        <Footer />
        <Outlet /> {/* This will render the child routes */}
    </>
  )
}

export default Main