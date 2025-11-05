import React from 'react'

export default function Card({ title, subtitle, children, footer }) {
  return (
    <div className="card">
      {title && <h3 style={{ margin: 0 }}>{title}</h3>}
      {subtitle && <p className="subtitle" style={{ marginTop: '.35rem' }}>{subtitle}</p>}
      {children && <div style={{ marginTop: '.8rem' }}>{children}</div>}
      {footer && <div style={{ marginTop: '.9rem' }}>{footer}</div>}
    </div>
  )
}
