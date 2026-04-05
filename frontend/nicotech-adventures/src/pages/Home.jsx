import "../css/home.css"
import ServiceCard from "../components/ServiceCard"
import { Link } from "react-router-dom"
import useScrollAnimation from "../hooks/useScrollAnimation"  // 🔥 CUSTOM HOOK

function Home() {

  // 🔥 ACTIVATE SCROLL ANIMATION
  useScrollAnimation()

  return (
    <div className="home">

      {/* 🔥 HERO SECTION */}
      <section className="hero fade-in">
        <h1>Building Smart Digital Solutions 🚀</h1>

        <p>
          At Nicotech Adventures, we design and develop modern websites,
          mobile apps, AI systems, and data-driven solutions for businesses.
        </p>

        <div className="hero-buttons">
          <Link to="/services" className="btn primary">
            Explore Services
          </Link>
        </div>
      </section>

      {/* 🔥 SERVICES PREVIEW */}
      <section className="services-preview fade-in">
        <h2>Our Core Services</h2>

        <div className="services-grid">

          <ServiceCard
            title="Web Development"
            description="We build modern websites and e-commerce platforms."
          />

          <ServiceCard
            title="Mobile App Development"
            description="Android and cross-platform mobile applications."
          />

          <ServiceCard
            title="Artificial Intelligence"
            description="AI systems, automation, and predictive models."
          />

          <ServiceCard
            title="Data Science"
            description="Machine learning and advanced analytics solutions."
          />

        </div>
      </section>

      {/* 🔥 WHY CHOOSE US */}
      <section className="why-us fade-in">
        <h2>Why Choose Nicotech?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>🚀 Innovation</h3>
            <p>We use modern technologies to deliver cutting-edge solutions.</p>
          </div>

          <div className="why-card">
            <h3>⚡ Fast Delivery</h3>
            <p>We deliver projects quickly without compromising quality.</p>
          </div>

          <div className="why-card">
            <h3>💡 Expertise</h3>
            <p>Strong background in AI, software engineering, and data science.</p>
          </div>

          <div className="why-card">
            <h3>🤝 Support</h3>
            <p>We provide continuous support and system improvements.</p>
          </div>
        </div>
      </section>

      {/* 🔥 CALL TO ACTION */}
      <section className="cta fade-in">
        <h2>Have a Project in Mind?</h2>
        <p>Let’s bring your idea to life with cutting-edge technology.</p>

        <Link to="/request" className="btn primary">
          Get Started
        </Link>
      </section>

    </div>
  )
}

export default Home