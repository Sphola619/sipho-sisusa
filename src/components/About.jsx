import { motion } from "framer-motion";
import "../styles/about.css";

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="about-content">
        <h2>About Me</h2>

        <p>
          I’m a Front-End Developer passionate about crafting clean,
          responsive, scalable and visually engaging websites. I enjoy turning
          ideas into intuitive user experiences through modern technologies
          like HTML, CSS, and JavaScript, with React as my go-to framework.
        </p>

        <p>
          I bring a detail-oriented mindset, a strong eye for design, and a
          problem-solving approach to every project I work on. Whether it’s
          building pixel-perfect layouts, optimizing performance, or making
          applications accessible and mobile-friendly, I strive to deliver
          solutions that not only work but feel great to use. I’m also eager to
          keep learning, exploring new tools and best practices to grow as a
          developer and add value to every team or project I join.
        </p>

        <div className="journey">
          <h3>My Journey</h3>

          <div className="journey-item">
            <h4>2022 – University of Fort Hare</h4>
            <p>
              In 2022, I graduated with an Honours Degree in Financial Markets
              from the University of Fort Hare, developing a strong foundation
              in global financial systems and risk management.
            </p>
          </div>

          <div className="journey-item">
            <h4>2023 – Bidvest Bank Graduate Program</h4>
            <p>
              I worked in the Treasury Department, gaining exposure to money
              markets, liquidity management, and foreign exchange operations,
              while learning the importance of system reliability and precision.
            </p>
          </div>

          <div className="journey-item">
            <h4>2024 – ACI Dealing Certificate</h4>
            <p>
              Earned the ACI Dealing Certificate, refining my expertise in
              financial instruments and strengthening my analytical mindset.
            </p>
          </div>

          <div className="journey-item">
            <h4>2024 – Transition to Tech</h4>
            <p>
              Completed a Full Stack Web Development Bootcamp with HyperionDev,
              building applications using JavaScript, React, Node.js, and
              MongoDB.
            </p>
          </div>

          <div className="journey-item">
            <h4>2024 – Continued Learning</h4>
            <p>
              Continued improving through platforms like FreeCodeCamp and
              The Odin Project, focusing on JavaScript fundamentals and
              deployment practices.
            </p>
          </div>

          <div className="journey-item">
            <h4>2025 – Marome Investments</h4>
            <p>
              Began working as a Junior Front-End Developer, contributing to
              live projects, building reusable UI components, optimizing
              performance, and collaborating with backend teams.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;