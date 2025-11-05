import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const [form, setForm] = useState({ email: '', password: '', name: '' })
  const navigate = useNavigate()

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    // Accept all entered details. No validation or backend.
    localStorage.setItem('authUser', JSON.stringify(form))
    navigate('/dashboard')
  }

  return (
    <div>
      <div className="container" style={{ marginTop: '8vh' }}>
        <div className="grid">
          <div className="col-6">
            <div className="card">
              <h1 style={{ marginTop: 0, marginBottom: '.4rem' }}>Welcome</h1>
              <p className="subtitle">Sign in to continue. Any details are accepted.</p>
              <form onSubmit={onSubmit} style={{ marginTop: '1rem', display: 'grid', gap: '.8rem' }}>
                <div>
                  <label className="kicker">Name</label>
                  <input name="name" type="text" placeholder="Ada Lovelace" value={form.name} onChange={update} />
                </div>
                <div>
                  <label className="kicker">Email</label>
                  <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={update} />
                </div>
                <div>
                  <label className="kicker">Password</label>
                  <input name="password" type="password" placeholder="••••••••" value={form.password} onChange={update} />
                </div>
                <div style={{ display: 'flex', gap: '.6rem', alignItems: 'center' }}>
                  <button className="btn btn-primary" type="submit">Sign In</button>
                  <span className="subtitle">No account required — proceeds to dashboard.</span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-6">
            <div className="card" style={{ height: '100%' }}>
              <h2 style={{ marginTop: 0 }}>About</h2>
              <p>
                This is a local demo app with three life areas: <b>AI Therapy</b>, <b>Workouts</b>, and <b>Budgeting</b>.
                Use the Settings to toggle <b>Light/Dark</b> mode and pick your favorite <b>accent color</b>.
              </p>
              <p className="subtitle">
                Default accent color is a calming sage green. Change it anytime from the top bar or Settings.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer"><div className="container">© {new Date().getFullYear()} AI Life Hub — Local Demo</div></footer>
    </div>
  )
}
