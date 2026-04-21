import "../css/footer.css"
import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* 🔹 COMPANY INFO */}
        <div className="footer-section">
          <h3>Nicotech Adventures</h3>
          <p>
            Building modern web applications, AI systems, mobile apps,
            and data-driven solutions for businesses.
          </p>
        </div>

        {/* 🔹 QUICK LINKS */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/request">Request</Link></li>
          </ul>
        </div>

        {/* 🔹 CONTACT INFO */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p><FaEnvelope />nicomalombe4@gmail.com</p>
          <p><FaPhone /> +254 794334958</p>
        </div>

        {/* 🔹 SOCIAL MEDIA */}
        <div className="footer-section">
          <h4>Follow Us</h4>

          <div className="social-icons">

            <a
              href="https://github.com/nicomalombe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nicodemus-malombe-644b37293/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>

      </div>

      {/* 🔻 BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nicotech Adventures. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer