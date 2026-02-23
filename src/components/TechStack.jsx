import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiPython, SiMongodb } from "react-icons/si";
import "../styles/techstack.css";

function TechStack() {
  return (
    <motion.section
      id="tech"
      className="tech"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="tech-content">
        <h2>Tech Stack</h2>

        <div className="tech-grid">
          <div className="tech-card">
            <FaReact />
            <p>React</p>
          </div>

          <div className="tech-card">
            <FaJsSquare />
            <p>JavaScript</p>
          </div>

          <div className="tech-card">
            <FaHtml5 />
            <p>HTML</p>
          </div>

          <div className="tech-card">
            <FaCss3Alt />
            <p>CSS</p>
          </div>

          <div className="tech-card">
            <FaNodeJs />
            <p>Node.js</p>
          </div>

          <div className="tech-card">
            <FaGithub />
            <p>GitHub</p>
          </div>

          <div className="tech-card">
            <SiPython />
            <p>Python</p>
          </div>

          <div className="tech-card">
            <SiMongodb />
            <p>MongoDB</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default TechStack;