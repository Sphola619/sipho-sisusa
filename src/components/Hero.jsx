import { motion } from "framer-motion";
import "../styles/hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1>
          <span>Sipho</span> Sisusa
        </h1>

        <p>
          Front-End Software Developer
        </p>
        <p
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.5px",
            opacity: 0.85,
            marginTop: "20px",
            marginBottom: "35px",
            lineHeight: "1.6",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            fontWeight: 400,
          }}
        >
          I build modern, responsive, and interactive web applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact" className="outline">Contact Me</a>
        </div>

        <div className="hero-cv">
          <a href="/Sipho_Sisusa_Web_Dev Résumé.pdf" download>
            Download My Résumé
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
