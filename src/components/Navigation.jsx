import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import logo from '../assets/logopic.png'
import '../styles/navigation.css'

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Paocantdev Logo" className="logo-image" />
        </Link>
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
