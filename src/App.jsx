import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ThemeProvider } from './theme/ThemeContext.jsx'
import SignIn from './pages/SignIn.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Category from './pages/Category.jsx'
import Attribute from './pages/Attribute.jsx'
import Settings from './pages/Settings.jsx'
import NotFound from './pages/NotFound.jsx'

function useAuth() {
  try {
    return !!JSON.parse(localStorage.getItem('authUser'))
  } catch {
    return false
  }
}

function ProtectedRoute({ children }) {
  const authed = useAuth()
  const location = useLocation()
  if (!authed) {
    return <Navigate to="/" state={{ from: location }} replace />
  }
  return children
}

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/:slug"
          element={
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/:slug/attribute/:num"
          element={
            <ProtectedRoute>
              <Attribute />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  )
}
