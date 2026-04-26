import { useRef, useState } from "react";
import { motion } from "framer-motion";
import projects from "../assets/projects";
import "../styles/projects.css";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  const totalProjects = projects.length;
  const previousIndex = (activeIndex - 1 + totalProjects) % totalProjects;
  const nextIndex = (activeIndex + 1) % totalProjects;
  const activeProject = projects[activeIndex];
  const previousProject = projects[previousIndex];
  const nextProject = projects[nextIndex];

  const goToPrevious = () => {
    setActiveIndex(previousIndex);
  };

  const goToNext = () => {
    setActiveIndex(nextIndex);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;
    const swipeThreshold = 50;

    if (distance > swipeThreshold) {
      goToNext();
    } else if (distance < -swipeThreshold) {
      goToPrevious();
    }

    touchStartX.current = null;
  };

  const accentClassName = (index) => {
    const accents = [
      "project-card--blue",
      "project-card--violet",
      "project-card--teal",
    ];

    return accents[index % accents.length];
  };

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
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

        <div className="projects-carousel">
          <button
            type="button"
            className="carousel-arrow"
            onClick={goToPrevious}
            aria-label="Show previous project"
          >
            &#8249;
          </button>

          <button
            type="button"
            className={`project-preview ${accentClassName(previousIndex)}`}
            onClick={() => setActiveIndex(previousIndex)}
            aria-label={`Show ${previousProject.title}`}
          >
            <span className="project-preview-label">Previous</span>
            <strong>{previousProject.title}</strong>
          </button>

          <article
            className={`project-card project-card--active ${accentClassName(activeIndex)}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <span className="project-card-count">
              {String(activeIndex + 1).padStart(2, "0")} / {String(totalProjects).padStart(2, "0")}
            </span>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.description}</p>
            <span className="tech-used">{activeProject.tech}</span>

            <div className="project-buttons">
              {activeProject.frontendRepo ? (
                <a href={activeProject.frontendRepo} target="_blank" rel="noreferrer">
                  {activeProject.backendRepo ? "Frontend Repo" : "GitHub"}
                </a>
              ) : null}
              {activeProject.backendRepo ? (
                <a href={activeProject.backendRepo} target="_blank" rel="noreferrer">
                  Backend Repo
                </a>
              ) : null}
              {activeProject.live ? (
                <a href={activeProject.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              ) : null}
            </div>
          </article>

          <button
            type="button"
            className={`project-preview ${accentClassName(nextIndex)}`}
            onClick={() => setActiveIndex(nextIndex)}
            aria-label={`Show ${nextProject.title}`}
          >
            <span className="project-preview-label">Next</span>
            <strong>{nextProject.title}</strong>
          </button>

          <button
            type="button"
            className="carousel-arrow"
            onClick={goToNext}
            aria-label="Show next project"
          >
            &#8250;
          </button>
        </div>

        <div className="projects-dots" aria-label="Project navigation">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className={index === activeIndex ? "project-dot project-dot--active" : "project-dot"}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${project.title}`}
            />
          ))}
        </div>

        <p className="projects-mobile-hint">Swipe the card or use the arrows to explore more projects.</p>
      </div>
    </motion.section>
  );
}

export default Projects;
