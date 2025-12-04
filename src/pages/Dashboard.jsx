import React from 'react'
import Navbar from '../components/Navbar.jsx'
import CategoryGrid from '../components/CategoryGrid.jsx'
import UserInfo from '../components/UserInfo.jsx'
import { useLLM } from '../llm/LLMContext.jsx'

export default function Dashboard() {
  const { mode } = useLLM()

  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: '1.25rem' }}>
        <UserInfo />

        <div className="card" style={{ marginTop: '1rem' }}>
          <h3 style={{ margin: 0 }}>LLM Tool</h3>
          <p className="subtitle" style={{ marginTop: '.35rem' }}>
            The chat interface uses <b>{mode}</b> mode: responses pull a short summary from Wikipedia’s public API.
          </p>
          <p className="subtitle">
            You can later swap in your own back-end or model by editing <code>src/llm/client.js</code>.
          </p>
        </div>

        <h1 style={{ marginTop: '1.25rem' }}>Dashboard</h1>
        <p className="subtitle">Choose a category. Each includes subtopics that open a chat interface.</p>
        <CategoryGrid />
      </div>
      <footer className="footer">
        <div className="container">Wire your real model/search in <code>src/llm/client.js</code>.</div>
      </footer>
    </div>
  )
}
