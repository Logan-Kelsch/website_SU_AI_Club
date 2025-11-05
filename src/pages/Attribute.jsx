import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

export default function Attribute() {
  const { slug, num } = useParams()
  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: '1.25rem' }}>
        <span className="badge" style={{ marginBottom: '.6rem', display: 'inline-block' }}>{slug}</span>
        <h1 style={{ marginTop: 0 }}>Attribute #{num}</h1>
        <p className="subtitle">This page is a placeholder. Build out specific tools, notes, or visualizations here.</p>
        <div style={{ marginTop: '1rem' }}>
          <Link className="btn" to={`/dashboard/${slug}`}>← Back to {slug}</Link>
        </div>
      </div>
    </div>
  )
}
