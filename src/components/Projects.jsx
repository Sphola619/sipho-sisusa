import { motion } from "framer-motion";
import projects from "../assets/projects";
import "../styles/projects.css";

function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="projects-content">
        <h2>Projects</h2>

        <p
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.5px",
            opacity: 0.85,
            marginTop: "5px",
            marginBottom: "50px",
            lineHeight: "1.6",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            fontWeight: 400,
          }}
        >
          A selection of projects showcasing my skills in frontend and full-stack development.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="tech-used">{project.tech}</span>

              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;