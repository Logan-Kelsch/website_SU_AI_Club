import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ThemeProvider } from './theme/ThemeContext.jsx'
import { LLMProvider } from './llm/LLMContext.jsx'

import SignIn from './pages/SignIn.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Therapy from './pages/Therapy.jsx'
import Workouts from './pages/Workouts.jsx'
import Budgeting from './pages/Budgeting.jsx'
import LLMChat from './pages/LLMChat.jsx'
import NotFound from './pages/NotFound.jsx'

function useAuth() {
  try { return !!JSON.parse(localStorage.getItem('authUser')) } catch { return false }
}
function ProtectedRoute({ children }) {
  const authed = useAuth()
  const location = useLocation()
  if (!authed) return <Navigate to="/" state={{ from: location }} replace />
  return children
}

export default function App() {
  return (
    <ThemeProvider>
      <LLMProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />

          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/dashboard/therapy" element={<ProtectedRoute><Therapy /></ProtectedRoute>} />
          <Route path="/dashboard/workouts" element={<ProtectedRoute><Workouts /></ProtectedRoute>} />
          <Route path="/dashboard/budgeting" element={<ProtectedRoute><Budgeting /></ProtectedRoute>} />

          {/* LLM chat endpoint */}
          <Route path="/chat/:category/:topic" element={<ProtectedRoute><LLMChat /></ProtectedRoute>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </LLMProvider>
    </ThemeProvider>
  )
}
