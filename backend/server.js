require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

const connectDB = require("./config/db")

// ROUTES
const serviceRoutes = require("./routes/serviceRoutes")
const portfolioRoutes = require("./routes/portfolioRoutes")
const requestRoutes = require("./routes/requestRoutes")
const contactRoutes = require("./routes/contactRoutes")

dotenv.config()
connectDB()

const app = express()

// MIDDLEWARE
app.use(cors())
app.use(express.json())

// ROUTES
app.use("/api/services", serviceRoutes)
app.use("/api/portfolio", portfolioRoutes)
app.use("/api/request", requestRoutes)

// 🔥 THIS IS THE MAIN FIX
app.use("/api", contactRoutes)
app.use("/api", requestRoutes)

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Nicotech Adventures API Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})