import { education } from '../data';

export default function Education() {
  return (
    <div className="main">
      <h2 className="page-title">Education</h2>
      <div className="timeline">
        {education.map(({ role, org, duration, location }) => (
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
      <p style={{ marginTop: 24, fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
        Credentials available upon request.
      </p>
    </div>
  );
}
