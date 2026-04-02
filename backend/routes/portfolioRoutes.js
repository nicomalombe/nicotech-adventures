const express = require("express")

const router = express.Router()

const {
  getPortfolio,
  createProject
} = require("../controllers/portfolioController")

router.get("/", getPortfolio)

router.post("/", createProject)

module.exports = router