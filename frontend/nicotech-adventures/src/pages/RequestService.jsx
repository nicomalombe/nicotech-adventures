import { useState } from "react"
import "../css/request.css"   // ✅ IMPORT CSS

function RequestService() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    description: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch("http://localhost:5000/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })

      if (!res.ok) throw new Error("Failed")

      alert("Request submitted 🚀")

      setForm({
        name: "",
        email: "",
        service: "",
        description: ""
      })

    } catch (error) {
      console.error(error)
      alert("Error submitting request ❌")
    }
  }

  return (
    <div className="request-container">
      <h2 className="request-title">Request a Service</h2>

      <form className="request-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="service"
          placeholder="Service Needed (e.g Web App, AI System)"
          value={form.service}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Describe your project..."
          value={form.description}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  )
}

export default RequestService