import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../theme/ThemeContext.jsx'

export default function Navbar({ showAuth = true }) {
  const { theme, setTheme, accent, setAccent } = useTheme()
  const navigate = useNavigate()

  const signOut = () => {
    localStorage.removeItem('authUser')
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="brand">
        <div className="logo" />
        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
          AI Life Hub
        </Link>
      </div>
      <div className="nav-actions">
        <Link className="btn" to="/settings">Settings</Link>
        <button
          aria-label="Toggle theme"
          title="Toggle Light/Dark"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <label className="btn" title="Pick accent color">
          🎨
          <input
            type="color"
            value={accent}
            onChange={(e) => setAccent(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
        {showAuth && (
          <button onClick={signOut} className="btn" title="Sign out">Sign out</button>
        )}
      </div>
    </nav>
  )
}
