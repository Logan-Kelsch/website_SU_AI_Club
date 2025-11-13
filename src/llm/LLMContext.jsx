import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LLMContext = createContext(null)

export function LLMProvider({ children }) {
  const [testMode, setTestMode] = useState(() => localStorage.getItem('llm_test_mode') === 'true')

  useEffect(() => {
    localStorage.setItem('llm_test_mode', String(testMode))
  }, [testMode])

  const value = useMemo(() => ({ testMode, setTestMode }), [testMode])
  return <LLMContext.Provider value={value}>{children}</LLMContext.Provider>
}

export function useLLM() {
  const ctx = useContext(LLMContext)
  if (!ctx) throw new Error('useLLM must be used within LLMProvider')
  return ctx
}
