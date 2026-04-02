import { motion } from "framer-motion";
import {
  FaBook,
  FaBriefcase,
  FaCertificate,
  FaLaptopCode,
  FaUniversity,
} from "react-icons/fa";
import "../styles/about.css";

function About() {
  // Keeping the journey content in one array makes it easy to update
  // the timeline without repeating the same JSX structure for each item.
  const journeyItems = [
    {
      year: "2022",
      title: "University of Fort Hare",
      icon: FaUniversity,
      description:
        "In 2022, I graduated with an Honours Degree in Financial Markets from the University of Fort Hare, developing a strong foundation in global financial systems and risk management.",
    },
    {
      year: "2023",
      title: "Bidvest Bank Graduate Program",
      icon: FaBriefcase,
      description:
        "I worked in the Treasury Department, gaining exposure to money markets, liquidity management, and foreign exchange operations, while learning the importance of system reliability and precision.",
    },
    {
      year: "2024",
      title: "ACI Dealing Certificate",
      icon: FaCertificate,
      description:
        "Earned the ACI Dealing Certificate, refining my expertise in financial instruments and strengthening my analytical mindset.",
    },
    {
      year: "2024",
      title: "Transition to Tech",
      icon: FaLaptopCode,
      description:
        "Completed a Full Stack Web Development Bootcamp with HyperionDev, building applications using JavaScript, React, Node.js, and MongoDB.",
    },
    {
      year: "2024",
      title: "Continued Learning",
      icon: FaBook,
      description:
        "Continued improving through platforms like FreeCodeCamp and The Odin Project, focusing on JavaScript fundamentals and deployment practices.",
    },
    {
      year: "2025",
      title: "Marome Investments",
      icon: FaBriefcase,
      description:
        "Began working as a Junior Front-End Developer, contributing to live projects, building reusable UI components, optimizing performance, and collaborating with backend teams.",
    },
  ];

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
          I&apos;m a Front-End Developer passionate about crafting clean,
          responsive, scalable and visually engaging websites. I enjoy turning
          ideas into intuitive user experiences through modern technologies like
          HTML, CSS, and JavaScript, with React as my go-to framework.
        </p>

        <p>
          I bring a detail-oriented mindset, a strong eye for design, and a
          problem-solving approach to every project I work on. Whether it&apos;s
          building pixel-perfect layouts, optimizing performance, or making
          applications accessible and mobile-friendly, I strive to deliver
          solutions that not only work but feel great to use. I&apos;m also eager
          to keep learning, exploring new tools and best practices to grow as a
          developer and add value to every team or project I join.
        </p>

        <div className="journey">
          <h3>My Journey</h3>

          {/* Each milestone shares the same layout, so we render them from data. */}
          {journeyItems.map(({ year, title, icon: Icon, description }) => (
            <div className="journey-item" key={`${year}-${title}`}>
              <h4>
                <Icon aria-hidden="true" />
                <span>
                  {year} - {title}
                </span>
              </h4>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default About;
