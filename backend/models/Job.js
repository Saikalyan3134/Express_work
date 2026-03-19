const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
title: String,
description: String,
budget: Number,
skills: [String],

status: {
type: String,
enum: ["Not Hired Yet","Requested","In Progress","Completed"],
default: "Not Hired Yet"
},

applicants: [
{
freelancerId: String,
name: String,
skills: [String],
status: {
type: String,
default: "Requested"
}
}
]

},{timestamps:true})

module.exports = mongoose.model("Job", jobSchema)