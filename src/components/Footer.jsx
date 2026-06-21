import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            <span style={{ color: 'var(--accent)' }}>&lt;</span>
            Yasir
            <span style={{ color: 'var(--accent)' }}> /&gt;</span>
          </span>
          <p>Full-Stack MERN Developer & DevOps Aspirant</p>
        </div>

        <div className="footer__links">
          {[
            { label: 'GitHub', href: 'https://github.com/yasir-sa' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/yasir-sa' },
            { label: 'Email', href: 'mailto:yasirsa05@gmail.com' },
          ].map((l) => (
            <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>

        <button className="footer__top-btn" onClick={scrollTop} aria-label="Scroll to top">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      </div>

      <div className="footer__bottom">
        <span>© {year} Yasir S.A. — Built with React & Vite</span>
      </div>
    </footer>
  )
}
