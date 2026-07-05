import "../css/about.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">

      {/* ================= HERO ================= */}
      <section className="about-hero">

        <div className="about-overlay">

          <div className="about-content">

            <h1>About Nicotech Adventures</h1>

            <p>
              Empowering businesses through innovative technology,
              Artificial Intelligence, Machine Learning, Data Science,
              Mobile Applications and Modern Web Development.
            </p>

          </div>

        </div>

      </section>

      {/* ================= COMPANY ================= */}

      <section className="company-section">

        <div className="container">

          <h2>Who We Are</h2>

          <p>
            <strong>Nicotech Adventures</strong> is a forward-thinking
            technology company dedicated to building innovative software
            solutions that help businesses embrace digital transformation.
          </p>

          <p>
            We specialize in designing modern websites, enterprise systems,
            mobile applications, Artificial Intelligence solutions,
            Machine Learning models, cloud-based platforms and advanced
            Data Science applications.
          </p>

          <p>
            Our goal is to transform ideas into reliable, scalable,
            secure and intelligent digital products that create lasting
            business value.
          </p>

        </div>

      </section>

      {/* ================= MISSION & VISION ================= */}

      <section className="mission-section">

        <div className="container mission-grid">

          <div className="mission-card">

            <h3>🎯 Our Mission</h3>

            <p>
              To deliver innovative, reliable and intelligent technology
              solutions that enable organizations to improve efficiency,
              increase productivity and achieve sustainable growth.
            </p>

          </div>

          <div className="mission-card">

            <h3>🌍 Our Vision</h3>

            <p>
              To become one of Africa's leading software development and
              Artificial Intelligence companies recognized for innovation,
              quality and customer satisfaction.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CORE VALUES ================= */}

      <section className="values-section">

        <div className="container">

          <h2>Our Core Values</h2>

          <div className="values-grid">

            <div className="value-card">
              <h3>🚀 Innovation</h3>
              <p>Continuously embracing new technologies to deliver modern digital solutions.</p>
            </div>

            <div className="value-card">
              <h3>🤝 Integrity</h3>
              <p>Building long-term relationships through honesty, transparency and professionalism.</p>
            </div>

            <div className="value-card">
              <h3>⭐ Excellence</h3>
              <p>Delivering high-quality products that exceed client expectations.</p>
            </div>

            <div className="value-card">
              <h3>📈 Growth</h3>
              <p>Helping businesses grow through innovative software and intelligent systems.</p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY US ================= */}

      <section className="why-about">

        <div className="container">

          <h2>Why Choose Nicotech Adventures?</h2>

          <div className="why-grid">

            <div className="why-card">
              <h3>💻 Modern Technologies</h3>
              <p>React, Java, Spring Boot, Python, AI, Machine Learning and Cloud Solutions.</p>
            </div>

            <div className="why-card">
              <h3>⚡ Fast Delivery</h3>
              <p>Agile software development that delivers projects efficiently and on time.</p>
            </div>

            <div className="why-card">
              <h3>🔒 Secure Systems</h3>
              <p>We prioritize data security, scalability and long-term system reliability.</p>
            </div>

            <div className="why-card">
              <h3>🌍 Client Focused</h3>
              <p>Every solution is tailored to meet each client's unique business requirements.</p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="about-cta">

        <div className="container">

          <h2>Ready to Build Something Amazing?</h2>

          <p>
            Partner with Nicotech Adventures and transform your ideas into
            powerful digital solutions.
          </p>

          <Link to="/request" className="about-btn">
            Request a Project
          </Link>

        </div>

      </section>

    </div>
  );
}

export default About;