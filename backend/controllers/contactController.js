const Contact = require("../models/Contact")

// CREATE
const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body

    const contact = new Contact({ name, email, message })
    const saved = await contact.save()

    res.status(201).json(saved)
  } catch (error) {
    res.status(500).json({ message: "Server Error" })
  }
}

// READ
const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find()
    res.json(messages)
  } catch (error) {
    res.status(500).json({ message: "Server Error" })
  }
}

// ✅ DELETE
const deleteMessage = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id)
    res.json({ message: "Deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: "Error deleting" })
  }
}

// ✅ MARK AS READ
const markAsRead = async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    )
    res.json(updated)
  } catch (error) {
    res.status(500).json({ message: "Error updating" })
  }
}

// ✅ EXPORT ALL
module.exports = {
  sendMessage,
  getMessages,
  deleteMessage,
  markAsRead
}