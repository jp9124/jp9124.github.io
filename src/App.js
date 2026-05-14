import './App.css';
import { projects, experience, education, interests, about } from './data';

const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'C++', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks & Tools',
    items: ['React', 'Flask', 'PostgreSQL', 'scikit-learn', 'AWS'],
  },
];

const navLinks = [
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Skills'     },
  { href: '#projects',   label: 'Projects'   },
  { href: '#experience', label: 'Experience' },
];

export default function App() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="nav">
        <a href="#hero" className="nav-brand">Jung Park</a>
        <ul className="nav-links">
          {navLinks.map(({ href, label }) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
      </nav>

      <main>
        {/* ── Hero ── */}
        <section id="hero" className="hero">
          <div className="hero-content">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">Jung Park.</h1>
            <p className="hero-sub">
              Software Engineering Student<br />at the University of Calgary
            </p>
            <div className="hero-links">
              <a href="mailto:junghwan.park@example.com">Email</a>
              <a href="https://linkedin.com/in/junghwanp" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/jungp22" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <img src="/image.png" alt="Jung Park" className="hero-photo" />
        </section>

        {/* ── About ── */}
        <section id="about" className="section section-alt">
          <div className="container">
            <p className="section-label">About</p>
            <div className="about-layout">
              <p className="about-intro">
                I'm a new graduate from University of Calgary
                Majoring in Software Engineering. I'm currently focused on full stack
                development and looking for new opportunities.
              </p>
              <ul className="about-facts">
                {about.map((fact, i) => (
                  <li key={i}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="section">
          <div className="container">
            <p className="section-label">Skills</p>
            <div className="skills-groups">
              {skillGroups.map(({ label, items }) => (
                <div key={label} className="skill-group">
                  <p className="skill-group-label">{label}</p>
                  <div className="skill-tags">
                    {items.map(item => (
                      <span key={item} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="section section-alt">
          <div className="container">
            <p className="section-label">Projects</p>
            <div className="projects-grid">
              {projects.map(({ name, image, link, description, tags }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                >
                  <div className="project-img-wrap">
                    <img src={image} alt={name} className="project-img" />
                  </div>
                  <div className="project-info">
                    <h3 className="project-name">{name}</h3>
                    <p className="project-desc">{description}</p>
                    <div className="project-tags">
                      {tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience & Education ── */}
        <section id="experience" className="section">
          <div className="container">
            <div className="exp-edu-grid">
              <div>
                <p className="section-label">Experience</p>
                {experience.map(({ role, org, duration, location }) => (
                  <div key={role} className="timeline-item">
                    <p className="timeline-role">{role}</p>
                    <p className="timeline-org">{org}</p>
                    <p className="timeline-meta">{duration} · {location}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className="section-label">Education</p>
                {education.map(({ role, org, duration, location }) => (
                  <div key={role} className="timeline-item">
                    <p className="timeline-role">{role}</p>
                    <p className="timeline-org">{org}</p>
                    <p className="timeline-meta">{duration} · {location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Interests ── */}
        <section className="section section-alt">
          <div className="container">
            <p className="section-label">Interests</p>
            <ul className="interests-list">
              {interests.map(({ label, link, linkText }) => (
                <li key={label} className="interest-item">
                  <span>{label}</span>
                  {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="interest-link">
                      {linkText} ↗
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="footer">
          <div className="container">
            <p>© 2026 Jung Park</p>
          </div>
        </footer>
      </main>
    </>
  );
}
