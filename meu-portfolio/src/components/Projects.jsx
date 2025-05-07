import React from "react";
import "../styles/projects.css";

const projects = [
  {
    title: "Projeto 1",
    description: "Descrição breve do projeto 1, destacando sua utilidade e tecnologias usadas.",
    link: "https://github.com/seuusuario/projeto1"
  },
  {
    title: "Projeto 2",
    description: "Descrição breve do projeto 2, com foco em resolução de problema ou inovação.",
    link: "https://github.com/seuusuario/projeto2"
  },
  {
    title: "Projeto 3",
    description: "Explicação curta sobre o projeto 3, destacando o que o torna interessante.",
    link: "https://github.com/seuusuario/projeto3"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projetos</h2>
      <p className="projects-description">Confira alguns dos meus projetos recentes:</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
