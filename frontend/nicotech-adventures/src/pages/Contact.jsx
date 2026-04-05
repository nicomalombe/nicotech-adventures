import { useState } from "react"
import "../css/contact.css"

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch("https://nicotech-adventures.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })

      const data = await res.json()

      alert("Message sent successfully ✅")

      setForm({ name: "", email: "", message: "" })

    } catch (error) {
      console.error(error)
      alert("Error sending message ❌")
    }
  }

  return (
    <div className="contact">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact