const mongoose = require("mongoose")

const proposalSchema = new mongoose.Schema({

jobId:String,

freelancerId:String,

coverLetter:String,

bid:Number,

createdAt:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Proposal",proposalSchema)