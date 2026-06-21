import './Skills.css'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: '#7c6fff',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 85 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#00d4ff',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 75 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🚀',
    color: '#ff6b9d',
    skills: [
      { name: 'Docker', level: 78 },
      { name: 'Git', level: 90 },
      { name: 'Jenkins', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Linux', level: 80 },
      { name: 'Postman', level: 88 },
    ],
  },
]

const tools = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Docker', icon: '🐳' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Git', icon: '📦' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Jenkins', icon: '⚙️' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Postman', icon: '📮' },
  { name: 'Express', icon: '🚂' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Gemini API', icon: '🤖' },
]

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <span className="section-tag">// expertise</span>
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        <p className="section-sub">
          Technologies and tools I work with to build reliable, scalable applications.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-group">
              <div className="skill-group__header">
                <span className="skill-group__icon">{group.icon}</span>
                <h3 className="skill-group__title" style={{ color: group.color }}>
                  {group.category}
                </h3>
              </div>
              <div className="skill-bars">
                {group.skills.map((s) => (
                  <div key={s.name} className="skill-bar-item">
                    <div className="skill-bar-label">
                      <span>{s.name}</span>
                      <span className="skill-pct" style={{ color: group.color }}>{s.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: `${s.level}%`,
                          background: `linear-gradient(90deg, ${group.color}99, ${group.color})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools cloud */}
        <div className="tools-section">
          <h4 className="tools-heading">Tech Toolkit</h4>
          <div className="tools-grid">
            {tools.map((t) => (
              <div key={t.name} className="tool-chip">
                <span className="tool-chip__icon">{t.icon}</span>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
