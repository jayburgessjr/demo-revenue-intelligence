import { useState } from 'react'

export type NavLink = {
  href: string
  label: string
}

type TopNavProps = {
  links: NavLink[]
}

const TopNav = ({ links }: TopNavProps) => {
  const [open, setOpen] = useState(false)

  return (
    <header className="top-nav">
      <div className="nav-container">
        <a className="brand" href="#overview">
          Revuity Analytics
        </a>
        <button
          className="nav-toggle"
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
        <nav className={`nav-links${open ? ' open' : ''}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default TopNav
