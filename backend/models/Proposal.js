const mongoose = require("mongoose")

const proposalSchema = new mongoose.Schema({

job: {
type: mongoose.Schema.Types.ObjectId,
ref: "Job"
},

freelancer: {
type: mongoose.Schema.Types.ObjectId,
ref: "User"
},

coverLetter: String,
bid: Number,

createdAt: {
type: Date,
default: Date.now
}

})

module.exports = mongoose.model("Proposal", proposalSchema)