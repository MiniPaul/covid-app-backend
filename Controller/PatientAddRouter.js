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


module.exports=router

