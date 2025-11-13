import React from 'react'
import { Link } from 'react-router-dom'

const CARDS = [
  {
    slug: 'therapy',
    title: 'AI Therapy',
    subtitle: 'Mental • Reflect, journal, and grow',
    color: '#a78bfa', // soft purple
    image: 'https://picsum.photos/seed/therapy/900/700'
  },
  {
    slug: 'workouts',
    title: 'Workouts',
    subtitle: 'Physical • Train, track, and recover',
    color: '#60a5fa', // soft blue
    image: 'https://picsum.photos/seed/workouts/900/700'
  },
  {
    slug: 'budgeting',
    title: 'Budgeting',
    subtitle: 'Financial • Plan, save, and invest',
    color: '#f59e0b', // warm amber
    image: 'https://picsum.photos/seed/budgeting/900/700'
  }
]

export default function CategoryGrid() {
  return (
    <div className="grid">
      {CARDS.map((card) => (
        <div key={card.slug} className="col-4">
          <section
            className="category-card"
            style={{ '--tone': card.color, '--bgimg': `url(${card.image})` }}
          >
            <div className="content">
              <h3 style={{ margin: 0 }}>{card.title}</h3>
              <p className="subtitle" style={{ marginTop: '.35rem' }}>{card.subtitle}</p>

              <p className="kicker" style={{ marginTop: '1rem' }}>Credits</p>
              <ul style={{ marginTop: '.35rem' }}>
                <li>Name 1</li>
                <li>Name 2</li>
                <li>Name 3</li>
              </ul>

              <div className="attr-grid" style={{ marginTop: '.6rem' }}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <Link key={i} className="attr-tile" to={`/dashboard/${card.slug}/attribute/${i+1}`}>
                    Attribute #{i+1}
                  </Link>
                ))}
              </div>

              <div style={{ marginTop: '.9rem' }}>
                <Link className="btn btn-primary" to={`/dashboard/${card.slug}`}>Open {card.title}</Link>
              </div>
            </div>

            {/* “Surrounding” imagery + soft colored bubbles */}
            <figure className="category-figure" aria-hidden="true">
              <img src={card.image} alt="" loading="lazy" />
            </figure>
            <div className="category-bubbles" aria-hidden="true">
              <span style={{ inset: 'auto -18px 8px auto' }} />
              <span style={{ inset: '12px auto auto -18px' }} />
              <span style={{ inset: 'auto 32% -18px auto' }} />
            </div>
          </section>
        </div>
      ))}
    </div>
  )
}
