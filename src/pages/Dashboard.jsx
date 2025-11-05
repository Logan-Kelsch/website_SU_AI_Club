import React from 'react'
import Navbar from '../components/Navbar.jsx'
import CategoryGrid from '../components/CategoryGrid.jsx'

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: '1.25rem' }}>
        <h1 style={{ marginTop: 0 }}>Dashboard</h1>
        <p className="subtitle">Pick a category to explore. Each has credits and placeholder attributes you can flesh out later.</p>
        <CategoryGrid />
      </div>
      <footer className="footer"><div className="container">Need more pages? Add routes & components in <code>src/pages</code>.</div></footer>
    </div>
  )
}
