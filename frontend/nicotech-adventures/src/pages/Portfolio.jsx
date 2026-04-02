import "../css/portfolio.css"

function Portfolio() {
  return (
    <div className="portfolio-page">

      <h1>Our Portfolio</h1>
      <p className="subtitle">
        Here are some of the projects developed by Nicotech Adventures
      </p>

      <div className="portfolio-grid">

        <div className="portfolio-card">
          <div className="overlay">
            <p>AI system that predicts diabetes risk using machine learning.</p>
          </div>
          <h3>AI Diabetes Prediction System</h3>
        </div>

        <div className="portfolio-card">
          <div className="overlay">
            <p>Full-stack hotel booking system with admin dashboard.</p>
          </div>
          <h3>Hotel Booking Management System</h3>
        </div>

        <div className="portfolio-card">
          <div className="overlay">
            <p>AI-powered inventory forecasting and demand prediction.</p>
          </div>
          <h3>Inventory Optimization AI</h3>
        </div>

        <div className="portfolio-card">
          <div className="overlay">
            <p>Real-time taxi booking platform with tracking system.</p>
          </div>
          <h3>Taxi Booking Platform</h3>
        </div>

        <div className="portfolio-card">
          <div className="overlay">
            <p>Mobile app showcasing personal portfolio using Java.</p>
          </div>
          <h3>Android Portfolio Application</h3>
        </div>

      </div>

    </div>
  )
}

export default Portfolio