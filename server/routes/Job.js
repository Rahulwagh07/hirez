const express = require("express");
const router = express.Router();
const {auth} = require("../middlewares/auth")

const {
    getAllAppliedJobs,
    getJobDetails,
    createJob,
    getAllApplicantsForJob,
    hireJobSeeker,
    getAllJobsByCreator,
    applyForJob,
} = require("../controllers/Job")


// Routes for Jobs
router.get("/getAppliedJobs", auth, getAllAppliedJobs);
router.get("/getJobDetails", getJobDetails);
router.post("/createJob", auth, createJob);
router.get("/getAllApplicants", auth, getAllApplicantsForJob);
router.put("/hireJobSeeker", auth,  hireJobSeeker);
router.get("/getAllJob", auth,  getAllJobsByCreator);
router.post("/applyForJob", auth, applyForJob);

 
module.exports = router