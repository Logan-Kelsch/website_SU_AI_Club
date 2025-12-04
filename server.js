// server.js
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const API_KEY = process.env.GEMINI_API_KEY
if (!API_KEY) {
  console.error('Missing GEMINI_API_KEY in .env')
  process.exit(1)
}
const MODEL_NAME = process.env.GEMINI_MODEL || 'gemini-1.5-flash'

const genAI = new GoogleGenerativeAI(API_KEY)
const model = genAI.getGenerativeModel({ model: MODEL_NAME })

// Simple health check so you know the server + env are loaded
app.get('/api/health', (req, res) => {
  res.json({ ok: true, model: MODEL_NAME, hasKey: !!API_KEY })
})

app.post('/api/chat', async (req, res) => {
  try {
    const { messages = [], category, topic } = req.body || {}

    // Add a preamble as the first turn to give the model context
    const preamble =
`You are an assistant inside a personal dashboard with three areas:
- Mental (AI Therapy), Physical (Workouts), and Financial (Budgeting).
Be accurate, concise, and helpful. Use bullet points when useful.
If asked for medical/financial advice, include a brief, sensible disclaimer.
Context: Category=${category || 'n/a'} | Topic=${topic || 'n/a'}`

    const contents = [
      { role: 'user', parts: [{ text: preamble }] },
      ...messages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }))
    ]

    const result = await model.generateContent({ contents })

    // ---- Robust extraction of text from various SDK shapes ----
    let text = ''
    const resp = result?.response

    if (resp && typeof resp.text === 'function') {
      text = resp.text()
    }
    if (!text && resp?.candidates?.length) {
      // Gather all candidate parts if .text() isn't available
      text = resp.candidates
        .map(c => c?.content?.parts?.map(p => p?.text || '').join('\n'))
        .filter(Boolean)
        .join('\n\n')
    }
    if (!text) {
      // Last resort: stringify something so you see *something*
      text = '(empty LLM response)'
    }

    // Optional: print a quick line so you can see replies in the server console
    console.log(`[LLM ${MODEL_NAME}]`, text.slice(0, 140).replace(/\n/g, ' '))

    res.json({ reply: text })
  } catch (err) {
    console.error('LLM error:', err)
    res.status(500).json({ error: 'LLM_ERROR', message: String(err?.message || err) })
  }
})

const PORT = Number(process.env.PORT || 8787)
app.listen(PORT, () => {
  console.log(`API ready → http://localhost:${PORT}`)
})
