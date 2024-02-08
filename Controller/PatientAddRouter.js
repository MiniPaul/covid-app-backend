const express=require("express")
const patientAddModel=require("../Models/PatientAddModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body//read
    let patient=new patientAddModel(data)
    let result=await patient.save()
    res.json({
        status:"success"
    })
})


router.get("/viewall",async(req,res)=>{
    let data=await patientAddModel.find()
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await patientAddModel.find(input)
    res.json(data)
})


module.exports=router

