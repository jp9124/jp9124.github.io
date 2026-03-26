import { NavLink } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

const navItems = [
  { to: '/', label: 'About', icon: '👤' },
  { to: '/skills', label: 'Skills', icon: '⚡' },
  { to: '/education', label: 'Education', icon: '🎓' },
  { to: '/experience', label: 'Experience', icon: '💼' },
  { to: '/interests', label: 'Interests', icon: '✨' },
  { to: '/projects', label: 'Projects', icon: '🚀' },
];

export default function Sidebar() {
  const { theme, toggle } = useTheme();

  return (
    <aside className="sidebar">
      <img src="/image.png" alt="Jung Park" className="profile-pic" />
      <h1>Jung Park</h1>
      <p className="subtitle">Software Engineering Student<br />University of Calgary</p>

      <div className="socials">
        <a href="mailto:junghwan.park@example.com" title="Email">
          <span className="email-icon">✉</span>
        </a>
        <a href="https://linkedin.com/in/junghwanp" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <img src="/InBug-Black.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/jungp22" target="_blank" rel="noopener noreferrer" title="GitHub">
          <img src="/github-mark.png" alt="GitHub" />
        </a>
      </div>

      <button className="theme-toggle" onClick={toggle}>
        {theme === 'dark' ? '☀️ Light mode' : '🌙 Dark mode'}
      </button>

      <nav>
        {navItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            <span className="nav-icon">{icon}</span>
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
