import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { useTheme } from '../theme/ThemeContext.jsx'

export default function Settings() {
  const { theme, setTheme, accent, setAccent } = useTheme()

  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: '1.25rem' }}>
        <h1 style={{ marginTop: 0 }}>Settings</h1>
        <div className="grid">
          <div className="col-6">
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Appearance</h3>
              <div style={{ display: 'grid', gap: '1rem', marginTop: '.5rem' }}>
                <div>
                  <div className="kicker">Theme</div>
                  <div style={{ display: 'flex', gap: '.5rem', marginTop: '.4rem' }}>
                    <button
                      className="btn"
                      onClick={() => setTheme('light')}
                      aria-pressed={theme === 'light'}
                    >☀️ Light</button>
                    <button
                      className="btn"
                      onClick={() => setTheme('dark')}
                      aria-pressed={theme === 'dark'}
                    >🌙 Dark</button>
                  </div>
                </div>
                <div>
                  <div className="kicker">Accent color</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginTop: '.4rem' }}>
                    <input type="color" value={accent} onChange={(e) => setAccent(e.target.value)} />
                    <span className="subtitle">{accent}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <h3 style={{ marginTop: 0 }}>About</h3>
              <p>
                This UI is meant to be extended. Add pages in <code>src/pages</code>, tweak styling in <code>src/styles.css</code>,
                and wire new routes in <code>src/App.jsx</code>.
              </p>
              <p className="subtitle">
                Sign-in accepts any details and stores them in <code>localStorage</code> for demo purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
