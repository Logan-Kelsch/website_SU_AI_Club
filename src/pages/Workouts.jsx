import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Card from '../components/Card.jsx'

const topics = [
  { id: 'injury-prevention', label: 'Injury Prevention' },
  { id: 'workout-planning', label: 'Workout Planning' }
]

export default function Workouts() {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: '1.25rem' }}>
        <h1 style={{ marginTop: 0 }}>Workouts</h1>
        <div className="grid">
          <div className="col-6">
            <Card title="Topics" subtitle="Pick a topic to open the LLM chat.">
              <div className="attr-grid" style={{ marginTop: '.5rem' }}>
                {topics.map(t => (
                  <Link key={t.id} to={`/chat/workouts/${t.id}`} className="attr-tile">{t.label}</Link>
                ))}
              </div>
            </Card>
          </div>
          <div className="col-6">
            <Card title="Credits" subtitle="Add names manually">
              <ul><li>Name 1</li><li>Name 2</li><li>Name 3</li></ul>
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
