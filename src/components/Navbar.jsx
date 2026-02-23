import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <Link to="home" smooth duration={500} className="logo">
        S.Sisusa
      </Link>

      <ul>
        <li>
          <Link to="about" smooth duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link to="tech" smooth duration={500}>
            Tech Stack
          </Link>
        </li>

        <li>
          <Link to="projects" smooth duration={500}>
            Projects
          </Link>
        </li>

        <li>
          <Link to="contact" smooth duration={500}>
            Contact
          </Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;