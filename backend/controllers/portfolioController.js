const Portfolio = require("../models/Portfolio")

exports.getPortfolio = async (req,res)=>{

  try{

    const projects = await Portfolio.find()

    res.json(projects)

  }catch(error){

    res.status(500).json({message:error.message})

  }

}

exports.createProject = async (req,res)=>{

  try{

    const project = new Portfolio(req.body)

    const savedProject = await project.save()

    res.status(201).json(savedProject)

  }catch(error){

    res.status(400).json({message:error.message})

  }

}