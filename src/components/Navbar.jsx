import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo" onClick={e => handleNav(e, '#home')}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Yasir</span>
          <span className="logo-bracket"> /&gt;</span>
        </a>

        <nav className={`navbar__links${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={e => handleNav(e, l.href)}>
              {l.label}
            </a>
          ))}
          <a
            href="mailto:yasirsa05@gmail.com"
            className="navbar__cta"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </nav>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
