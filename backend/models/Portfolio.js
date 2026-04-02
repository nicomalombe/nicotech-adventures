const mongoose = require("mongoose")

const portfolioSchema = new mongoose.Schema({

  projectName:{
    type:String,
    required:true
  },

  description:{
    type:String
  },

  technologies:{
    type:String
  },

  projectLink:{
    type:String
  },

  createdAt:{
    type:Date,
    default:Date.now
  }

})

module.exports = mongoose.model("Portfolio", portfolioSchema)