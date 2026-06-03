import { BrowserRouter, Routes, Route, NavLink, useParams } from 'react-router-dom'
import TransactionPage from './components/TransactionPage'
import DashboardPage from './components/DashboardPage'
import RecordPage from './components/RecordPage'
import { useState } from 'react'
import './App.css'

function App() {
  const navList = [
    { icon: 'house', name: 'Dashboard', link: '/' },
    { icon: 'file-pen', name: 'Record', link: '/record' },
    { icon: 'receipt', name: 'Transaction', link: '/transaction' },
  ]

  const activeTab = ({ isActive }) => ({
    borderRadius: isActive ? "50px" : "none",
    backgroundColor: isActive ? "rgba(0,255,0,0.2)" : "rgba(0,0,0,0)",
    color: isActive ? "green" : "black"
  })

  const navItems = navList.map(item =>
    <NavLink to={item.link} style={activeTab}>
      <i className={`fa-solid fa-${item.icon}`}></i>
      <p>{item.name}</p>
    </NavLink>
  )

  function Home() {
    return <DashboardPage />
  }

  function Record() {
    return <RecordPage />
  }

  function Transaction() {
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
