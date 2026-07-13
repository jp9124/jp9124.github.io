import "./App.css";
import { useEffect, useState } from "react";
import {
  projects,
  experience,
  volunteeringExperience,
  education,
} from "./data";

const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "Rust"],
  },
  {
    label: "Web & Mobile",
    items: ["HTML5", "CSS3", "React", "React Native"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Flask"],
  },
  {
    label: "AI / Machine Learning",
    items: ["PyTorch", "scikit-learn"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "SQL"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "Docker", "Claude", "AWS", "Terraform"],
  },
];

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
];

function getCurrentLocation() {
  return {
    pathname: window.location.pathname,
    hash: window.location.hash,
  };
}

function useAppLocation() {
  const [location, setLocation] = useState(getCurrentLocation);

  useEffect(() => {
    const updateLocation = () => setLocation(getCurrentLocation());

    window.addEventListener("popstate", updateLocation);
    window.addEventListener("hashchange", updateLocation);

    return () => {
      window.removeEventListener("popstate", updateLocation);
      window.removeEventListener("hashchange", updateLocation);
    };
  }, []);

  const navigate = (href) => {
    window.history.pushState({}, "", href);
    setLocation(getCurrentLocation());
  };

  return [location, navigate];
}

function ScrollToHash({ location }) {
  useEffect(() => {
    if (!location.hash || location.hash.startsWith("#/")) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    window.setTimeout(() => {
      document
        .querySelector(location.hash)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }, [location.hash, location.pathname]);

  return null;
}

function Nav({ onNavigate, theme, onToggleTheme }) {
  const handleNavigate = (event, href) => {
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <nav className="nav">
      <a
        href="/#hero"
        className="nav-brand"
        onClick={(event) => handleNavigate(event, "/#hero")}
      >
        Jung Park
      </a>
      <ul className="nav-links">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a href={href} onClick={(event) => handleNavigate(event, href)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        aria-pressed={theme === "dark"}
      >
        {theme === "light" ? "☾ Dark" : "☀ Light"}
      </button>
    </nav>
  );
}

function HomePage() {
  return (
    <>
      <main>
        {/* ── Hero ── */}
        <section id="hero" className="hero">
          <div className="hero-content">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">Jung Park.</h1>
            <p className="hero-sub">
              Software Engineering Graduate at <br />
              the University of Calgary
            </p>
            <div className="hero-links">
              <a href="mailto:junghwan.park@ucalgary.ca">Email</a>
              <a
                href="https://linkedin.com/in/junghwanp"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/jungp22"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <img src="/image.png" alt="Jung Park" className="hero-photo" />
        </section>

        {/* ── About ── */}
        <section id="about" className="section section-alt">
          <div className="container">
            <p className="section-label">About</p>
            <p className="about-intro">
              I'm a recent alumni from the University of Calgary majoring in
              Software Engineering, where I graduated June of 2026 with
              Distinction. Currently, I am invested in machine learning,
              developing full-stack applications, and most recently I have been
              getting into learning rust.
            </p>
            <p className="about-intro about-interests">
              Outside of working, I enjoy listening to music, watching movies,
              and playing video games. I also like sharpening my problem-solving
              skills through LeetCode, where you can follow{" "}
              <a
                href="https://leetcode.com/u/junghwan_park/"
                target="_blank"
                rel="noopener noreferrer"
              >
                my progress
              </a>
              .
            </p>
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
                    {items.map((item) => (
                      <span key={item} className="skill-tag">
                        {item}
                      </span>
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
                      {tags.map((t) => (
                        <span key={t} className="project-tag">
                          {t}
                        </span>
                      ))}
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
            <p className="section-label">Experience</p>
            <div className="exp-edu-grid">
              {experience.length > 0 && (
                <div>
                  <p className="timeline-group-label">
                    Professional Experience
                  </p>
                  {experience.map(({ role, org, duration, location }) => (
                    <div key={role} className="timeline-item">
                      <p className="timeline-role">{role}</p>
                      <p className="timeline-org">{org}</p>
                      <p className="timeline-meta">
                        {duration} · {location}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <div>
                <p className="timeline-group-label">Education</p>
                {education.map(({ role, org, duration, location }) => (
                  <div key={role} className="timeline-item">
                    <p className="timeline-role">{role}</p>
                    <p className="timeline-org">{org}</p>
                    <p className="timeline-meta">
                      {duration} · {location}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <p className="timeline-group-label">Volunteering Experience</p>
                {volunteeringExperience.map(
                  ({ role, org, duration, location }) => (
                    <div key={role} className="timeline-item">
                      <p className="timeline-role">{role}</p>
                      <p className="timeline-org">{org}</p>
                      <p className="timeline-meta">
                        {duration} · {location}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <p>© 2026 Jung Park</p>
              <div className="footer-links">
                <a href="mailto:junghwan.park@ucalgary.ca">Email</a>
                <a
                  href="https://linkedin.com/in/junghwanp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/jungp22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <span>Last updated July 13, 2026</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default function App() {
  const [location, navigate] = useAppLocation();
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light",
    );
  };

  return (
    <>
      <ScrollToHash location={location} />
      <Nav onNavigate={navigate} theme={theme} onToggleTheme={toggleTheme} />
      <HomePage />
    </>
  );
}
