import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'AI Career Analyser',
    description:
      'AI-powered career platform featuring resume generation, mock interview simulations, and an interactive 3D virtual assistant. Built with Gemini API for intelligent analysis and feedback.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Gemini API', 'Express'],
    link: 'https://resume-generator-app-2.onrender.com/',
    gradient: 'linear-gradient(135deg, #7c6fff 0%, #00d4ff 100%)',
    icon: '🤖',
    featured: true,
  },
  {
    id: 2,
    title: 'Dockerized To-Do List',
    description:
      'Full-stack CRUD application containerized with Docker. Includes a complete Jenkins CI/CD pipeline for automated build, test, and deployment workflows.',
    tech: ['Docker', 'Jenkins', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://todo-frontend-docker-hj3d.onrender.com',
    gradient: 'linear-gradient(135deg, #00d4ff 0%, #0088cc 100%)',
    icon: '🐳',
    featured: false,
  },
  {
    id: 3,
    title: 'Task Manager',
    description:
      'Efficient task management system with persistent storage, priority sorting, and deadline tracking. Clean UI focused on productivity and ease of use.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://todolist-project-3-2054.onrender.com/',
    gradient: 'linear-gradient(135deg, #ff6b9d 0%, #ff8c42 100%)',
    icon: '✅',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <span className="section-tag">// my work</span>
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>
        <p className="section-sub">
          A selection of projects I've built — from AI-powered platforms to DevOps pipelines.
        </p>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className={`project-card${p.featured ? ' project-card--featured' : ''}`}>
              <div className="project-card__glow" style={{ background: p.gradient }} />

              <div className="project-card__header">
                <div className="project-icon" style={{ background: p.gradient }}>
                  {p.icon}
                </div>
                {p.featured && <span className="featured-badge">Featured</span>}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-ext"
                  aria-label="Open project"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>

              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>

              <div className="project-card__tech">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-card__btn"
                style={{ '--grad': p.gradient }}
              >
                Live Demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
