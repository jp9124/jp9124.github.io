import { projects } from '../data';

export default function Projects() {
  return (
    <div className="main">
      <h2 className="page-title">Projects</h2>
      <p className="projects-note">Currently under construction — feel free to look around!</p>
      <div className="projects-grid">
        {projects.map(({ name, image, link, description, tags }) => (
          <div key={name} className="project-card">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={name} className="project-img" />
              <div className="project-body">
                <div className="project-name">{name}</div>
                <div className="project-desc">{description}</div>
                <div className="project-tags">
                  {tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
