import { useState } from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";

function Navbar() {
  // Controls the mobile menu state while reusing the same links for desktop.
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="home" smooth={true} duration={500}>
          S.Sisusa
        </Link>
      </div>

      {/* Hamburger button only changes classes; CSS handles the visual transition. */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="about" smooth duration={500} onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="tech" smooth duration={500} onClick={() => setMenuOpen(false)}>
            Tech Stack
          </Link>
        </li>
        <li>
          <Link to="projects" smooth duration={500} onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth duration={500} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
