import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card.jsx'

export default function CategoryGrid() {
  return (
    <div className="grid">
      <div className="col-4">
        <Card title="AI Therapy" subtitle="Mental • Reflect, journal, and grow">
          <p className="kicker">Credits</p>
          <ul style={{ marginTop: '.4rem' }}>
            <li>Name 1</li>
            <li>Name 2</li>
            <li>Name 3</li>
          </ul>
          <hr className="sep" />
          <p className="kicker">Attributes</p>
          <div className="attr-grid" style={{ marginTop: '.5rem' }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <Link key={i} className="attr-tile" to={`/dashboard/therapy/attribute/${i+1}`}>
                Attribute #{i+1}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: '.8rem' }}>
            <Link className="btn btn-primary" to="/dashboard/therapy">Open Category</Link>
          </div>
        </Card>
      </div>

      <div className="col-4">
        <Card title="Workouts" subtitle="Physical • Train, track, and recover">
          <p className="kicker">Credits</p>
          <ul style={{ marginTop: '.4rem' }}>
            <li>Name 1</li>
            <li>Name 2</li>
            <li>Name 3</li>
          </ul>
          <hr className="sep" />
          <p className="kicker">Attributes</p>
          <div className="attr-grid" style={{ marginTop: '.5rem' }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <Link key={i} className="attr-tile" to={`/dashboard/workouts/attribute/${i+1}`}>
                Attribute #{i+1}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: '.8rem' }}>
            <Link className="btn btn-primary" to="/dashboard/workouts">Open Category</Link>
          </div>
        </Card>
      </div>

      <div className="col-4">
        <Card title="Budgeting" subtitle="Financial • Plan, save, and invest">
          <p className="kicker">Credits</p>
          <ul style={{ marginTop: '.4rem' }}>
            <li>Name 1</li>
            <li>Name 2</li>
            <li>Name 3</li>
          </ul>
          <hr className="sep" />
          <p className="kicker">Attributes</p>
          <div className="attr-grid" style={{ marginTop: '.5rem' }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <Link key={i} className="attr-tile" to={`/dashboard/budgeting/attribute/${i+1}`}>
                Attribute #{i+1}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: '.8rem' }}>
            <Link className="btn btn-primary" to="/dashboard/budgeting">Open Category</Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
