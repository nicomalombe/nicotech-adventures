import "../css/navbar.css"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"   // 👈 IMPORT

function Navbar() {
  return (
    <nav className="navbar">

      {/* 🔥 LOGO */}
      <div className="logo">
        <img src={logo} alt="Nicotech Logo" />
      </div>

      {/* 🔥 LINKS */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/request">Request</Link></li>
      </ul>

    </nav>
  )
}

export default Navbar