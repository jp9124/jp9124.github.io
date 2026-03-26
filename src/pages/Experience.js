import { experience } from '../data';

export default function Experience() {
  return (
    <div className="main">
      <h2 className="page-title">Experience</h2>
      <div className="timeline">
        {experience.map(({ role, org, duration, location }) => (
          <div key={role} className="timeline-card">
            <div className="role">{role}</div>
            <div className="org">{org}</div>
            <div className="timeline-meta">
              <span>{duration}</span>
              <span>{location}</span>
            </div>
          </div>
        ))}
      </div>
      <a
        className="resume-link"
        href="https://docs.google.com/document/d/1ZaZnDUMrqtNL61Y2It_REIBEDbjSnXki/edit?tab=t.0"
        target="_blank"
        rel="noopener noreferrer"
      >
        ↗ Download full resume
      </a>
    </div>
  );
}
