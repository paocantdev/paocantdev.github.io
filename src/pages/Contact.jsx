import { FaEnvelope, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa'
import '../styles/contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <p className="contact-intro">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h3>Email</h3>
            <p>paolomurillo0109@gmail.com</p>
          </div>
          <div className="info-card">
            <FaFacebook className="info-icon" />
            <h3>Facebook</h3>
            <p><a href="https://facebook.com/paolomurillo" target="_blank" rel="noopener noreferrer">Paolo Murillo</a></p>
          </div>
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Location</h3>
            <p>Cavite, Philippines</p>
          </div>
        </div>
      </div>
    </div>
  )
}
