import React from 'react'
import Navbar from '../components/Navbar.jsx'
import CategoryGrid from '../components/CategoryGrid.jsx'
import UserInfo from '../components/UserInfo.jsx'
import { useLLM } from '../llm/LLMContext.jsx'

export default function Dashboard() {
  const { testMode, setTestMode } = useLLM()

  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: '1.25rem' }}>
        <UserInfo />

        <div className="card" style={{ marginTop: '1rem' }}>
          <h3 style={{ margin: 0 }}>LLM Tool</h3>
          <p className="subtitle" style={{ marginTop: '.35rem' }}>
            Toggle <b>Test Mode</b> to send messages with <i>no model response</i>. Turn it off for a simulated reply (replaceable with your API).
          </p>
          <label style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', marginTop: '.6rem' }}>
            <input
              type="checkbox"
              checked={testMode}
              onChange={(e) => setTestMode(e.target.checked)}
            />
            <span>Enable Test Mode (no replies)</span>
          </label>
        </div>

        <h1 style={{ marginTop: '1.25rem' }}>Dashboard</h1>
        <p className="subtitle">
          Choose a category. Each includes subtopics that open a chat interface.
        </p>
        <CategoryGrid />
      </div>
      <footer className="footer">
        <div className="container">Extend pages in <code>src/pages</code> and wire APIs in <code>src/llm/client.js</code>.</div>
      </footer>
    </div>
  )
}
