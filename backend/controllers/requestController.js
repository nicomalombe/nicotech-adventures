const ServiceRequest = require("../models/ServiceRequest")

// CREATE REQUEST
const createRequest = async (req, res) => {
  try {
    const { name, email, service, description } = req.body

    const saved = await ServiceRequest.create({
      name,
      email,
      service,
      description
    })

    res.status(201).json(saved)

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server Error" })
  }
}

// GET ALL REQUESTS
const getRequests = async (req, res) => {
  try {
    const data = await ServiceRequest.find()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: "Server Error" })
  }
}

module.exports = { createRequest, getRequests }