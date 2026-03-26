import { about } from '../data';

export default function About() {
  return (
    <div className="main">
      <h2 className="page-title">About</h2>
      <div className="about-grid">
        {about.map((item, i) => (
          <div key={i} className="about-item">
            <span className="dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
