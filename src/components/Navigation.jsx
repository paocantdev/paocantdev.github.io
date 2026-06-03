import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaMoon, FaSun } from 'react-icons/fa'
import logo from '../assets/logopic.png'
import '../styles/navigation.css'

export default function Navigation() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
    localStorage.setItem('darkMode', isDarkMode)
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo-section">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="Paocantdev Logo" className="logo-image" />
          </Link>
          <button className="theme-toggle" onClick={toggleDarkMode} title="Toggle dark mode">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
        <div className="nav-socials">
          <a href="https://github.com/paocantdev" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/paolo-murillo-127968399" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  )
}
