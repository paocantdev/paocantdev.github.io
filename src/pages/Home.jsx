import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import '../styles/home.css'

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Pao</h1>
          <p className="hero-subtitle">Full Stack Developer | Creative Problem Solver</p>
          <p className="hero-description">
            Building modern, responsive web applications with a focus on user experience and clean code.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="skills-preview">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React, HTML5, CSS3, JavaScript, Responsive Design</p>
          </div>
          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js, Python, PHP, RESTful APIs</p>
          </div>
          <div className="skill-card">
            <h3>Tools & Others</h3>
            <p>Git, Vite, Testing, GitHub Actions</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Let's Build Something Amazing</h2>
        <p>Have a project in mind? I'd love to hear from you!</p>
        <Link to="/contact" className="btn btn-primary btn-large">
          Let's Connect! <FaArrowRight />
        </Link>
      </section>
    </div>
  )
}
