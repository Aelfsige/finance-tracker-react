import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Spending from './components/Spending'
import Navbar from './components/Navbar'
import './App.css'
import { useState } from 'react'

function App() {
  function Home() {
    return (
      <>
        <h1>Good day, Aelfsige</h1>
        <hr />
        <Dashboard />
        <Spending />
      </>
    )
  }

  function About()
  {
    return <h1>About</h1>
  }

  function Contact()
  {
    return <h1>Contact</h1>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Navbar />
    </BrowserRouter>
  )
}

export default App
