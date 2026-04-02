const express = require("express")
const router = express.Router()

const {
  createRequest,
  getRequests
} = require("../controllers/requestController")

router.post("/request", createRequest)
router.get("/request", getRequests)

module.exports = router