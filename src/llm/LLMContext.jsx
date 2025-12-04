import React, { createContext, useContext, useMemo } from 'react'

const LLMContext = createContext(null)
export const LLM_MODES = { WEB: 'web' } // single mode now

export function LLMProvider({ children }) {
  const value = useMemo(() => ({ mode: LLM_MODES.WEB }), [])
  return <LLMContext.Provider value={value}>{children}</LLMContext.Provider>
}

export function useLLM() {
  const ctx = useContext(LLMContext)
  if (!ctx) throw new Error('useLLM must be used within LLMProvider')
  return ctx
}
