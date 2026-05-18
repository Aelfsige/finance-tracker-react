import Dashboard from './components/Dashboard'
import Spending from './components/Spending'
import Navbar from './components/Navbar'
import './App.css'
import { useState } from 'react'

function App() {
  const financialStatus = [
    {name: "Income", amount: 1500},
    {name: "Expenses", amount: 3000},
    {name: "Balance", amount: 5000},
  ]

  const [page, setPage] = useState("Dashboard")

  function loadPage(page)
  {
    setPage(page)
  }

  return (
    <>
      <h1>Good day, Aelfsige</h1>
      <hr />
      <Dashboard items={financialStatus} />
      <Spending />
      <Navbar />
    </>
  )
}

export default App
