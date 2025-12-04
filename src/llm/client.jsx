// Calls your Node API which talks to Google Gemini.
// Keeps your GEMINI_API_KEY out of the browser.
export async function sendToLLM({ category, topic, messages = [] }) {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ category, topic, messages })
  })
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data?.message || 'LLM request failed')
  }
  return { role: 'assistant', content: data.reply ?? '(no text)' }
}
