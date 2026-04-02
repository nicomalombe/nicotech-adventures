const Service = require("../models/Service")

exports.getServices = async (req,res)=>{

  try{

    const services = await Service.find()

    res.json(services)

  }catch(error){

    res.status(500).json({message:error.message})

  }

}


exports.createService = async (req,res)=>{

  try{

    const service = new Service(req.body)

    const savedService = await service.save()

    res.status(201).json(savedService)

  }catch(error){

    res.status(400).json({message:error.message})

  }

}