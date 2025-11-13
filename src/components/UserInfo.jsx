import React from 'react'

function getInitials(name = '') {
  const parts = name.trim().split(/\s+/).slice(0, 2)
  if (!parts.length) return 'A'
  return parts.map(p => p[0]?.toUpperCase() || '').join('') || 'A'
}

export default function UserInfo() {
  // Fallback (“no backend”): sensible defaults if nothing in localStorage
  let fallback = {
    name: 'Alex Doe',
    email: 'alex@example.com',
    plan: 'Free',
    streak: 3,
    goals: ['Mindfulness 10 min', 'Run 2 mi', 'Save $50/wk']
  }

  let stored = null
  try {
    stored = JSON.parse(localStorage.getItem('authUser'))
  } catch {}
  const user = {
    name: stored?.name?.trim() || fallback.name,
    email: stored?.email?.trim() || fallback.email,
    plan: fallback.plan,
    streak: fallback.streak,
    goals: fallback.goals
  }

  const initials = getInitials(user.name)

  return (
    <div className="userbar card">
      <div className="userbar-left">
        <div className="avatar" aria-hidden="true">{initials}</div>
        <div>
          <h2 style={{ margin: 0 }}>Hi, {user.name}</h2>
          <p className="subtitle" style={{ marginTop: '.25rem' }}>{user.email} • {user.plan} plan</p>
        </div>
      </div>

      <ul className="stat-list">
        <li><span className="kicker">Daily streak</span><div className="stat">{user.streak} days</div></li>
        <li><span className="kicker">Today’s goals</span><div className="stat">{user.goals.slice(0,2).join(' · ')}</div></li>
        <li><span className="kicker">Accent</span><div className="stat"><span className="accent-dot" /></div></li>
      </ul>
    </div>
  )
}
