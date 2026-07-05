import { useState } from "react"
import "../css/request.css"

function RequestService() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    description: ""
  })
const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "https://nicotech-adventures.onrender.com/api/request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      alert("✅ Your project request has been submitted successfully.");

      setForm({
       name: "",
    email: "",
    service: "",
    description: ""
      });

    } catch (error) {
      console.error(error);
      alert("❌ Unable to submit your request.");
    }

    setLoading(false);
  };

  return (
    <div className="request-page">

      {/* HERO */}

      <section className="request-hero">

        <div className="request-overlay">

          <div className="request-hero-content">

            <span className="section-tag">
              Start Your Project
            </span>

            <h1>Request Our Professional Services</h1>

            <p>
              Whether you need a website, mobile application,
              AI solution or enterprise software, our experts are
              ready to help transform your idea into reality.
            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="request-container">

        {/* LEFT */}

        <div className="request-info">

          <h2>Why Request a Consultation?</h2>

          <p>
            Every successful project begins with understanding your
            goals. Our team will analyze your requirements and provide
            professional recommendations tailored to your business.
          </p>

          <div className="feature-card">
            <h3>💻 Custom Software Development</h3>
            <p>Tailored software solutions for your organization.</p>
          </div>

          <div className="feature-card">
            <h3>📱 Mobile Applications</h3>
            <p>Professional Android and cross-platform apps.</p>
          </div>

          <div className="feature-card">
            <h3>🤖 Artificial Intelligence</h3>
            <p>Automation, AI assistants and intelligent systems.</p>
          </div>

          <div className="feature-card">
            <h3>📊 Data Science & Analytics</h3>
            <p>Business intelligence and predictive analytics.</p>
          </div>

        </div>

        {/* FORM */}

        <div className="request-form-container">

          <h2>Project Request Form</h2>

          <form
            className="request-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

          

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a Service</option>

              <option>Web Development</option>

              <option>Mobile App Development</option>

              <option>Artificial Intelligence</option>

              <option>Machine Learning</option>

              <option>Data Science</option>

              <option>Cloud Solutions</option>

              <option>UI/UX Design</option>

              <option>Other</option>

            </select>

           
            <textarea
              name="description"
              rows="7"
              placeholder="Describe your project requirements..."
              value={form.description}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Submitting..."
                : "Submit Project Request"}
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default RequestService;
