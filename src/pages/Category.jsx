import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Card from '../components/Card.jsx'

const TITLES = {
  therapy: 'AI Therapy',
  workouts: 'Workouts',
  budgeting: 'Budgeting',
}

export default function Category() {
  const { slug } = useParams()
  const title = TITLES[slug] || 'Category'

  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: '1.25rem' }}>
        <h1 style={{ marginTop: 0 }}>{title}</h1>
        <div className="grid">
          <div className="col-6">
            <Card title="Credits" subtitle="Add names manually as needed">
              <ul>
                <li>Name 1</li>
                <li>Name 2</li>
                <li>Name 3</li>
              </ul>
            </Card>
          </div>
          <div className="col-6">
            <Card title="Attributes" subtitle="Links to subpages (placeholders)">
              <div className="attr-grid">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Link key={i} className="attr-tile" to={`/dashboard/${slug}/attribute/${i+1}`}>
                    Attribute #{i+1}
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <Link className="btn" to="/dashboard">← Back to Dashboard</Link>
        </div>
      </div>
    </div>
  )
}
