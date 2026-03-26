import { skills } from '../data';

export default function Skills() {
  return (
    <div className="main">
      <h2 className="page-title">Skills</h2>
      <div className="skills-list">
        {skills.map(({ name, level }) => (
          <div key={name} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{name}</span>
              <span className="skill-pct">{level}%</span>
            </div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" style={{ width: `${level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
