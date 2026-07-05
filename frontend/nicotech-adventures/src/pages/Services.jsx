import "../css/services.css";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <div className="services-page">

      {/* ================= HERO ================= */}

      <section className="services-hero">

        <div className="services-overlay">

          <div className="services-content">

            <span className="section-tag">
              Professional Software Solutions
            </span>

            <h1>Our Services</h1>

            <p>
              We help businesses and organizations leverage modern
              technology through innovative software development,
              Artificial Intelligence, Machine Learning,
              Data Science and Cloud Solutions.
            </p>

            <Link to="/request" className="hero-btn">
              Request a Project
            </Link>

          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="services-section">

        <h2>Our Core Services</h2>

        <p className="section-description">
          We provide end-to-end digital transformation solutions
          tailored to businesses of all sizes.
        </p>

        <div className="services-grid">

          <ServiceCard
            title="🌐 Web Development"
            description="Corporate websites, e-commerce platforms, business portals and enterprise web applications."
          />

          <ServiceCard
            title="📱 Mobile App Development"
            description="Native Android and cross-platform applications built for performance and scalability."
          />

          <ServiceCard
            title="🤖 Artificial Intelligence"
            description="AI-powered automation, intelligent assistants and business decision systems."
          />

          <ServiceCard
            title="🧠 Machine Learning"
            description="Predictive analytics, recommendation systems and intelligent forecasting."
          />

          <ServiceCard
            title="📊 Data Science"
            description="Business intelligence, dashboards and advanced analytics solutions."
          />

          <ServiceCard
            title="☁ Cloud Solutions"
            description="Cloud deployment, APIs, hosting and scalable infrastructure."
          />

          <ServiceCard
            title="💻 Software Development"
            description="Custom desktop applications, enterprise software and business systems."
          />

          <ServiceCard
            title="🗄 Database Design"
            description="Secure, optimized SQL and NoSQL database architecture."
          />

          <ServiceCard
            title="🎨 UI / UX Design"
            description="Beautiful, responsive interfaces focused on excellent user experience."
          />

          <ServiceCard
            title="🔐 Cyber Security"
            description="Application security, vulnerability assessment and secure software practices."
          />

          <ServiceCard
            title="🔄 API Integration"
            description="Integration with payment gateways, third-party APIs and cloud services."
          />

          <ServiceCard
            title="🛠 IT Consultancy"
            description="Digital transformation consulting and technology strategy."
          />

        </div>

      </section>

      {/* ================= DEVELOPMENT PROCESS ================= */}

      <section className="process">

        <h2>Our Development Process</h2>

        <div className="process-grid">

          <div className="process-card">
            <span>01</span>
            <h3>Consultation</h3>
            <p>Understanding your business goals and requirements.</p>
          </div>

          <div className="process-card">
            <span>02</span>
            <h3>Planning</h3>
            <p>Designing the project roadmap and selecting technologies.</p>
          </div>

          <div className="process-card">
            <span>03</span>
            <h3>Design</h3>
            <p>Creating modern UI/UX prototypes and user journeys.</p>
          </div>

          <div className="process-card">
            <span>04</span>
            <h3>Development</h3>
            <p>Building secure, scalable and maintainable applications.</p>
          </div>

          <div className="process-card">
            <span>05</span>
            <h3>Testing</h3>
            <p>Ensuring quality through comprehensive testing and QA.</p>
          </div>

          <div className="process-card">
            <span>06</span>
            <h3>Deployment</h3>
            <p>Launching your solution with continuous support.</p>
          </div>

        </div>

      </section>

      {/* ================= TECHNOLOGIES ================= */}

      <section className="technologies">

        <h2>Technologies We Use</h2>

        <div className="tech-grid">

          <div>React</div>
          <div>Java</div>
          <div>Spring Boot</div>
          <div>Python</div>
          <div>Node.js</div>
          <div>Flutter</div>
          <div>MySQL</div>
          <div>MongoDB</div>
          <div>Docker</div>
          <div>TensorFlow</div>
          <div>Scikit-Learn</div>
          <div>AWS</div>

        </div>

      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="testimonials">

        <h2>What Our Clients Say</h2>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <p>
              "Nicotech Adventures delivered our company website beyond our expectations."
            </p>
            <h4>— James Kimani</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Professional developers with excellent communication and timely delivery."
            </p>
            <h4>— Sarah Mueni</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "Their AI solution significantly improved our internal operations."
            </p>
            <h4>— David Odhiambo</h4>
          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="services-cta">

        <h2>Ready to Build Your Next Project?</h2>

        <p>
          Let's transform your ideas into innovative digital solutions.
        </p>

        <Link to="/request" className="hero-btn">
          Get Started
        </Link>

      </section>

    </div>
  );
}

export default Services;