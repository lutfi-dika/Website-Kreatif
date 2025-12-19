import React, { useState } from 'react';
import '../styles/Projects.css';

const projectsData = [
    {
        id: 1,
        name: "Website Undangan Pernikahan Zulfian Irya",
        category: "Website",
        description: "Website interaktif untuk undangan pernikahan modern.",
        image: "https://i.pinimg.com/736x/3a/af/b4/3aafb4b1894bd114d3f6e3145b4c2e9e.jpg",
        link: "https://magical-torte-1fd6d7.netlify.app/",
        tags: ["HTML", "CSS3", "JavaScript", "Responsive"]
    },
];

const categories = ['All', 'Website', 'UI/UX', 'Poster Digital'];

const ProjectCard = ({ project }) => (
    <div className="project-card">
        <div className="project-image-wrapper">
            <img src={project.image} alt={project.name} className="project-image" />
        </div>

        <div className="project-info">
            <h3 className="project-name-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tags-used">
                {project.tags.map(tag => (
                    <span key={tag} className="tag-item">{tag}</span>
                ))}
            </div>

            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-detail">
                Visit Project →
            </a>
        </div>
    </div>
);

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="projects-section-container">
            <h2 className="project-section-title">Projects WEB<span>KRAF</span></h2>

            <p className="project-subtitle">
                Beberapa hasil karya terbaik dan profesional dari WEBKRAF.
            </p>

            <div className="filter-buttons">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                ) : (
                    <p className="no-projects-found">Tidak ada proyek dalam kategori ini.</p>
                )}
            </div>
        </section>
    );
};

export default Projects;
