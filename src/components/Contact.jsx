import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "../styles/contact.css";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="contact-content">
        <h2>Contact Me</h2>

        <p>
          If you'd like to collaborate or discuss a project, feel free to reach out.
        </p>

        <div className="contact-links">
          <a href="mailto:sisusasipho@gmail.com">
            <FaEnvelope /> Email
          </a>

          <a
            href="https://wa.me/27833498742"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href="https://github.com/Sphola619"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sipho-sisusa-a16400219/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;