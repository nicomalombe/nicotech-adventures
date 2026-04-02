const mongoose = require("mongoose")

const requestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    trim: true
  },

  service: {
    type: String,
    required: true,
    trim: true
  },

  // ✅ MATCH FRONTEND FIELD NAME
  description: {
    type: String,
    required: true
  }

}, {
  // ✅ AUTOMATIC createdAt & updatedAt
  timestamps: true
})

module.exports = mongoose.model("ServiceRequest", requestSchema)