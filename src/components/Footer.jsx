import '../styles/footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Paocantdev. All rights reserved.</p>
        <p className="footer-text">Who said the sky is the limit?</p>
      </div>
    </footer>
  )
}
