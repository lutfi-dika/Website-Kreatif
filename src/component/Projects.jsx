import { useState } from 'react';
import '../styles/Projects.css';

const projectsData = [
  {
    id: 1,
    name: 'Website Undangan Pernikahan',
    category: 'Website',
    description: 'Website interaktif untuk undangan pernikahan modern dengan animasi elegan.',
    image: 'https://i.pinimg.com/736x/3a/af/b4/3aafb4b1894bd114d3f6e3145b4c2e9e.jpg',
    link: 'https://magical-torte-1fd6d7.netlify.app/',
    tags: ['HTML', 'CSS3', 'JavaScript', 'Responsive'],
  },
  {
    id: 2,
    name: 'Website Jualan Makanan',
    category: 'Website',
    description: 'Website e-commerce untuk jualan makanan dan minuman dengan UI menarik.',
    image: 'https://raw.githubusercontent.com/lutfi-dika/Website-D-DiShop/refs/heads/main/src/assets/logo.png',
    link: 'https://websiteddishop.netlify.app/',
    tags: ['React', 'CSS', 'Netlify'],
  },
];

const categories = ['All', 'Website', 'UI/UX', 'Poster Digital'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <span className="section-label">Portfolio</span>
        <h2 className="projects-title">
          Projek <span>Terbaik Kami</span>
        </h2>
        <p className="projects-subtitle">
          Beberapa hasil karya terbaik dan profesional dari Webkraf Digital Studio.
        </p>

        <div className="projects-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects-filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <div className="project-card-image">
                  <img src={project.image} alt={project.name} />
                  <div className="project-card-overlay">
                    <span className="project-card-view">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 15L15 5M15 5H8M15 5v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="project-card-body">
                  <span className="project-card-category">{project.category}</span>
                  <h3 className="project-card-name">{project.name}</h3>
                  <p className="project-card-desc">{project.description}</p>
                  <div className="project-card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))
          ) : (
            <p className="projects-empty">Tidak ada proyek dalam kategori ini.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
