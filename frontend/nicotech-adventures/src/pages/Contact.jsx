import { useState } from "react";
import "../css/contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",

    message: "",
  });

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
        "https://nicotech-adventures.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("✅ Message sent successfully!");

        setForm({
          name: "",
          email: "",
      
          message: "",
        });
      } else {
        alert(data.message || "Unable to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="contact-page">

      {/* ================= HERO ================= */}

      <section className="contact-hero">

        <div className="contact-overlay">

          <div className="contact-content">

            <span className="section-tag">
              Get In Touch
            </span>

            <h1>Let's Build Something Amazing Together</h1>

            <p>
              Have an idea, project, or business challenge?
              Our team is ready to help you transform your vision
              into innovative digital solutions.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="contact-container">

        {/* LEFT */}

        <div className="contact-info">

          <h2>Contact Information</h2>

          <p>
            Reach out to Nicotech Adventures through any of the
            following channels.
          </p>

          <div className="info-card">

            <h3>📍 Address</h3>

            <p>
              nairobi, Kenya
            </p>

          </div>

          
          <div className="info-card">

            <h3>🕒 Working Hours</h3>

            <p>Monday - Friday</p>

            <p>8:00 AM - 5:00 PM</p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="contact-form">

          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>

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
            <textarea
              name="message"
              rows="7"
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </section>

      {/* ================= MAP ================= */}

      <section className="contact-map">

        <h2>Our Location</h2>

        <p>
          We proudly serve clients across Kenya and internationally.
        </p>

    

      </section>

    </div>
  );
}

export default Contact;