import "../css/home.css";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import HeroSlider from "../components/HeroSlider";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Home() {

  // Activate scroll animations
  useScrollAnimation();

  return (
    <div className="home">

      {/* ================= HERO SLIDER ================= */}
      <HeroSlider />

      {/* ================= SERVICES ================= */}
      <section id="services" className="services-preview fade-in">

        <h2>Our Core Services</h2>

        <div className="services-grid">

          <ServiceCard
            title="Web Development"
            description="We build modern business websites, e-commerce platforms and enterprise web applications."
          />

          <ServiceCard
            title="Mobile App Development"
            description="Professional Android and cross-platform mobile applications tailored to your business."
          />

          <ServiceCard
            title="Artificial Intelligence"
            description="AI solutions, automation, chatbots and intelligent business systems."
          />

          <ServiceCard
            title="Machine Learning"
            description="Predictive models, recommendation systems and intelligent data-driven applications."
          />

          <ServiceCard
            title="Data Science"
            description="Business intelligence, analytics dashboards and advanced data insights."
          />

          <ServiceCard
            title="Cloud Solutions"
            description="Scalable cloud deployment, APIs, hosting and infrastructure solutions."
          />

        </div>

      </section>

      {/* ================= WHY US ================= */}

      <section className="why-us fade-in">

        <h2>Why Choose Nicotech Adventures?</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3>🚀 Innovation</h3>

            <p>
              We embrace modern technologies including Artificial Intelligence,
              Machine Learning and Cloud Computing to build future-ready
              solutions.
            </p>

          </div>

          <div className="why-card">

            <h3>⚡ Fast Delivery</h3>

            <p>
              Agile development methodologies enable us to deliver projects
              efficiently without compromising quality.
            </p>

          </div>

          <div className="why-card">

            <h3>💡 Technical Expertise</h3>

            <p>
              Our expertise spans Software Engineering, AI, Data Science,
              Mobile Development and Enterprise Systems.
            </p>

          </div>

          <div className="why-card">

            <h3>🤝 Client Support</h3>

            <p>
              We provide continuous technical support, maintenance and future
              system upgrades.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CALL TO ACTION ================= */}

      <section className="cta fade-in">

        <h2>Ready to Transform Your Business?</h2>

        <p>
          Let's build innovative digital solutions that help your business
          grow faster.
        </p>

        <Link to="/request" className="btn primary">
          Request a Project
        </Link>

      </section>

    </div>
  );
}

export default Home;