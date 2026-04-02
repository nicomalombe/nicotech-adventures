const express = require("express")
const router = express.Router()

const {
  sendMessage,
  getMessages,
  deleteMessage,
  markAsRead
} = require("../controllers/contactController")

// CREATE
router.post("/contact", sendMessage)

// READ
router.get("/contact", getMessages)

// DELETE
router.delete("/contact/:id", deleteMessage)

// UPDATE (MARK AS READ)
router.put("/contact/:id", markAsRead)

module.exports = router