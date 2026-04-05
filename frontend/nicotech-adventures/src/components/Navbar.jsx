import "../css/navbar.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import logo from "../assets/logo.png"   // 👈 KEEP YOUR LOGO

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">

      {/* 🔥 LOGO */}
      <div className="logo">
        <img src={logo} alt="Nicotech Logo" />
      </div>

      {/* 🍔 HAMBURGER */}
      <div 
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* 🔗 LINKS */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>

        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>

        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>

        <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>

        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

        <li><Link to="/request" onClick={() => setMenuOpen(false)}>Request</Link></li>

      </ul>

    </nav>
  )
}

export default Navbar