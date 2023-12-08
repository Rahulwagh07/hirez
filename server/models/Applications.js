const mongoose = require("mongoose");
const User = require("../models/User");  
const Job = require("../models/Job");  

const applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "Reviewed", "Hired"],
        required: true,
    },
});

module.exports = mongoose.model("Applications", applicationSchema);
