import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Decorative stars are generated once so the background feels organic
// without needing a separate asset or hard-coded positions.
const stars = Array.from({ length: 80 }, (_, index) => ({
  id: index,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 2 + 1}px`,
  duration: `${Math.random() * 3 + 3}s`,
  delay: `${Math.random() * 4}s`,
}));

function App() {
  return (
    <div className="app-shell">
      {/* Purely visual background layer kept outside the main content flow. */}
      <div className="page-stars" aria-hidden="true">
        {stars.map((star) => (
          <span
            key={star.id}
            className="page-star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDuration: star.duration,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="app-content">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
