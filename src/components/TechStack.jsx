import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiPython,
  SiMongodb,
  SiPostman,
  SiPostgresql,
  SiSqlite,
  SiTailwindcss,
  SiExpress,
  SiFastapi,
  SiMongoose,
} from "react-icons/si";
import "../styles/techstack.css";

function TechStack() {
  const skillGroups = [
    {
      title: "Frontend",
      accent: "Build polished interfaces and responsive user experiences.",
      items: [
        { name: "JavaScript", icon: FaJsSquare },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "React", icon: FaReact },
      ],
    },
    {
      title: "Backend",
      accent: "Powering APIs, business logic, and application structure.",
      items: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express", icon: SiExpress },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Mongoose", icon: SiMongoose },
        { name: "Python", icon: SiPython },
      ],
    },
    {
      title: "Databases",
      accent: "Working with document and relational data across projects.",
      items: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "SQLite", icon: SiSqlite },
      ],
    },
    {
      title: "Tools",
      accent: "Supporting version control, testing, and team workflows.",
      items: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "Postman", icon: SiPostman },
      ],
    },
  ];

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
        <p className="tech-intro">
          The tools I use across the stack, grouped by how they support my
          workflow from interface design to backend services and databases.
        </p>

        <div className="tech-groups">
          {skillGroups.map((group) => (
            <article className="tech-group-card" key={group.title}>
              <div className="tech-group-header">
                <span className="tech-group-tag">{group.title}</span>
                <p>{group.accent}</p>
              </div>

              <div className="tech-grid">
                {group.items.map(({ name, icon: Icon }) => (
                  <div className="tech-card" key={name}>
                    <Icon aria-hidden="true" />
                    <p>{name}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default TechStack;
