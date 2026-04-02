import "../css/services.css"
import ServiceCard from "../components/ServiceCard"

function Services() {

  return (

    <div className="services-page">

      <h1>Our Services</h1>

      <div className="services-grid">

        <ServiceCard
          title="E-commerce Development"
          description="Complete online stores with payment systems."
        />

        <ServiceCard
          title="Mobile Applications"
          description="Android apps built using modern technologies."
        />

        <ServiceCard
          title="Graphics Design"
          description="Logos, branding, posters, and marketing graphics."
        />

        <ServiceCard
          title="AI Systems"
          description="Intelligent automation and machine learning systems."
        />

        <ServiceCard
          title="Software Development"
          description="Custom desktop and enterprise software."
        />

        <ServiceCard
          title="Database Management"
          description="Secure and scalable database architecture."
        />

        <ServiceCard
          title="Data Analysis"
          description="Business insights through data analytics."
        />

        <ServiceCard
          title="Machine Learning Projects"
          description="Predictive models and AI-powered systems."
        />

      </div>
      {/* 🔥 TESTIMONIALS SECTION */}
<section className="testimonials">
  <h2>What Our Clients Say</h2>

  <div className="testimonial-grid">

    <div className="testimonial-card">
      <p>"Nicotech built our company website beyond expectations."</p>
      <h4>- James K.</h4>
    </div>

    <div className="testimonial-card">
      <p>"Very professional team and fast delivery!"</p>
      <h4>- Sarah M.</h4>
    </div>

    <div className="testimonial-card">
      <p>"Their AI solution improved our business operations."</p>
      <h4>- David O.</h4>
    </div>

    <div className="testimonial-card">
      <p>"Highly recommend for any tech-related projects."</p>
      <h4>- Grace N.</h4>
    </div>

    <div className="testimonial-card">
      <p>"Clean UI and excellent system performance."</p>
      <h4>- Brian T.</h4>
    </div>

    <div className="testimonial-card">
      <p>"They delivered exactly what we needed on time."</p>
      <h4>- Esther W.</h4>
    </div>

    <div className="testimonial-card">
      <p>"Great communication and technical expertise."</p>
      <h4>- Kevin L.</h4>
    </div>

    <div className="testimonial-card">
      <p>"Our mobile app works perfectly thanks to them!"</p>
      <h4>- Alice P.</h4>
    </div>

  </div>
</section>

    </div>
  )
}

export default Services