const mongoose = require("mongoose");
const Applications = require("../models/Applications");
const User = require("../models/User");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: { 
    type: String,
    required: true,
  },
  skillRequired: {
    type: [String],
    required: true,
  },
  qualification: {
    type: String,
  },
  location:{
    type:String,
  },
  salary: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["open", "closed", "filled"],  
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  applicants: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Applications",
  },
});

module.exports = mongoose.model("Job", jobSchema);
