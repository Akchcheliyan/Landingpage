import React from "react";

const projects = [
  {
    title: "Multi-colour Backgroung",
    description: "Is it in a photo gallery on a website, a PowerPoint slide, a poster, or something else",
    image: "src/Page/933c6195d6c50705fd2d4e6d110916d3.jpg",
  },
  {
    title: "photo Gallery",
    description: "Upload or show me the photo gallery you’re referring to (or a screenshot if it's a webpage.",
    image: "src/Page/pexels-sulimansallehi-1704488.jpg",
  },
  {
    title: "Calculator",
    description:
      "This calculator allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division quickly and efficiently",
    image: "src/Page/Casio_calculator_JS-20WK_in_201901_002.jpg",
  },

 
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
