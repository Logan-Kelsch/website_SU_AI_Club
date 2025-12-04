import React, { useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { useLLM } from '../llm/LLMContext.jsx'
import { sendToLLM } from '../llm/client.jsx'

function pretty(label) {
  return label.split('-').map(s => s[0]?.toUpperCase() + s.slice(1)).join(' ')
}

export default function LLMChat() {
  const { category, topic } = useParams()
  const { mode } = useLLM()
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const scrollRef = useRef(null)

  const title = useMemo(() => `${pretty(category)} • ${pretty(topic)}`, [category, topic])

  const send = async (e) => {
    e.preventDefault()
    const content = text.trim()
    if (!content) return
    setText('')

    const newUser = { role: 'user', content }
    const history = [...messages, newUser]
    setMessages(history)

    try {
      const reply = await sendToLLM({ category, topic, messages: history })
      setMessages(prev => [...prev, reply])
    } catch (err) {
      // Surface the error visibly in the chat
      setMessages(prev => [...prev, { role: 'assistant', content: `⛔ LLM error: ${String(err.message || err)}` }])
    } finally {
      setTimeout(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
      }, 0)
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: '1.25rem' }}>
        <span className="badge" style={{ marginBottom: '.6rem', display: 'inline-block' }}>{pretty(category)}</span>
        <h1 style={{ marginTop: 0 }}>{title}</h1>

        <div className="banner">Current LLM mode: <b>{mode} (Gemini)</b></div>

        <div className="chat card" ref={scrollRef} style={{ maxHeight: 420, overflow: 'auto' }}>
          {messages.length === 0 ? (
            <p className="subtitle">Start typing below to send your first message.</p>
          ) : (
            messages.map((m, i) => (
              <div key={i} className={`bubble ${m.role === 'user' ? 'user' : 'assistant'}`}>
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{m.content}</pre>
              </div>
            ))
          )}
        </div>

        <form onSubmit={send} className="chat-form card" style={{ marginTop: '.8rem' }}>
          <textarea
            rows={3}
            placeholder="Write your message…"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div style={{ display: 'flex', gap: '.6rem', justifyContent: 'flex-end' }}>
            <Link className="btn" to={`/dashboard/${category}`}>← Back</Link>
            <button className="btn btn-primary" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}
