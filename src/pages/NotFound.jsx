import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: '2rem' }}>
        <h1>404</h1>
        <p className="subtitle">That page doesn’t exist (yet).</p>
        <Link className="btn" to="/dashboard">Back to Dashboard</Link>
      </div>
    </div>
  )
}
