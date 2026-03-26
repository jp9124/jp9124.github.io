import { interests } from '../data';

export default function Interests() {
  return (
    <div className="main">
      <h2 className="page-title">Interests</h2>
      <div className="interests-list">
        {interests.map(({ icon, label, link, linkText }) => (
          <div key={label} className="interest-item">
            <span className="interest-icon">{icon}</span>
            <span>
              {label}
              {link && (
                <>
                  {' '}—{' '}
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {linkText}
                  </a>
                </>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
