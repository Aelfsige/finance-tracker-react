import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import TransactionPage from './components/TransactionPage'
import DashboardPage from './components/DashboardPage'
import RecordPage from './components/RecordPage'
import Spending from './components/Spending'
import { useState } from 'react'
import './App.css'

function App() {
  const navList = [
      {icon: '🏠', name: 'Dashboard', link: '/'},
      {icon: '📜', name: 'Record', link: '/record'},
      {icon: '💸', name: 'Transaction', link: '/transaction'},
      {icon: '⚙️', name: 'Settings', link: '/settings'},
    ]

    const navItems = navList.map(item => 
      <Link to={item.link}>
          {item.icon} 
          <p>{item.name}</p>
      </Link>
    )

  function Home() {
    return (
      <>
        <h1>Good day, Aelfsige</h1>
        <hr />
        <DashboardPage />
        <Spending />
      </>
    )
  }

  function Record()
  {
    return <RecordPage />
  }

  function Transaction()
  {
    return <TransactionPage />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/record" element={<Record />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>

      <nav>
          <div className="navbar">
              {navItems}
          </div>
      </nav>
    </BrowserRouter>
  )
}

export default App
