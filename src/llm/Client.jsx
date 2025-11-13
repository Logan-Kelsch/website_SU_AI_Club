// Detachable LLM client.
// Swap this function for a real API call later (fetch/axios to your backend).
export async function sendToLLM({ text, category, topic, testMode }) {
  if (testMode) return null; // test mode: send with NO response

  // Simulated reply (replace with a real API call)
  await new Promise(r => setTimeout(r, 350));
  const short = text.length > 160 ? text.slice(0, 160) + '…' : text;
  return {
    role: 'assistant',
    content: `Simulated ${category}/${topic} reply.\n\nYou said: “${short}”\n\n(Replace sendToLLM in src/llm/client.js with your live API.)`
  };
}
