import { useEffect, useState } from "react"
import "../css/admin.css"

function Admin() {
  const [contacts, setContacts] = useState([])
  const [requests, setRequests] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/contact")
      .then(res => res.json())
      .then(data => setContacts(data))

    fetch("http://localhost:5000/api/request")
      .then(res => res.json())
      .then(data => setRequests(data))
  }, [])

  return (
    <div className="admin-container">

      <h1 className="admin-title">Admin Dashboard</h1>

      {/* CONTACTS */}
      <div className="card">
        <h2>Contact Messages</h2>
        {contacts.length === 0 ? (
          <p>No messages yet</p>
        ) : (
          contacts.map((c) => (
            <div className="item" key={c._id}>
              <h4>{c.name}</h4>
              <p>{c.email}</p>
              <p>{c.message}</p>
            </div>
          ))
        )}
      </div>

      {/* REQUESTS */}
      <div className="card">
        <h2>Service Requests</h2>
        {requests.length === 0 ? (
          <p>No requests yet</p>
        ) : (
          requests.map((r) => (
            <div className="item" key={r._id}>
              <h4>{r.name}</h4>
              <p>{r.email}</p>
              <p><strong>{r.service}</strong></p>
              <p>{r.description}</p>
            </div>
          ))
        )}
      </div>

    </div>
  )
}

export default Admin