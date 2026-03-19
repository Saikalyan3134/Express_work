const express = require("express")
const router = express.Router()
const Job = require("../models/Job")

// ✅ POST JOB → SAVE TO DB
router.post("/", async (req,res)=>{
try{

const job = new Job(req.body)

await job.save()

res.json(job)

}catch(err){
res.status(500).json(err)
}
})
// ✅ GET ALL JOBS
router.get("/", async (req,res)=>{
try{
const jobs = await Job.find().sort({createdAt:-1})
res.json({success:true,jobs})
}catch(err){
res.status(500).json({message:"Error fetching jobs"})
}
})

// ✅ APPLY
router.post("/apply/:jobId", async (req,res)=>{
try{
const { freelancerId, name, skills } = req.body

const job = await Job.findById(req.params.jobId)

job.applicants.push({
freelancerId,
name,
skills
})

job.status = "Requested"

await job.save()

res.json({message:"Applied successfully"})

}catch(err){
res.status(500).json({message:"Error applying"})
}
})

// ✅ HIRE
router.post("/hire/:jobId/:freelancerId", async (req,res)=>{
try{
const job = await Job.findById(req.params.jobId)

job.status = "In Progress"

job.applicants = job.applicants.map(app=>{
if(app.freelancerId === req.params.freelancerId){
return {...app, status:"Hired"}
}
return app
})

await job.save()

res.json({message:"Freelancer hired"})

}catch(err){
res.status(500).json({message:"Error hiring"})
}
})

// ✅ REJECT
router.post("/reject/:jobId/:freelancerId", async (req,res)=>{
try{
const job = await Job.findById(req.params.jobId)

job.applicants = job.applicants.map(app=>{
if(app.freelancerId === req.params.freelancerId){
return {...app, status:"Rejected"}
}
return app
})

await job.save()

res.json({message:"Freelancer rejected"})

}catch(err){
res.status(500).json({message:"Error rejecting"})
}
})

module.exports = router