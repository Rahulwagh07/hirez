const express = require("express");
const router = express.Router();
const {auth} = require("../middlewares/auth")

const {
    getAllAppliedJobs,
    getJobDetails,
    createJob,
    editJob,
    deleteJob,
    getAllApplicantsForJob,
    hireJobSeeker,
    getAllJobsByCreator,
    applyForJob,
} = require("../controllers/Job")


// Routes for Jobs
router.get("/getAppliedJobs", auth, getAllAppliedJobs);
router.post("/getJobDetails", auth, getJobDetails);
router.post("/createJob", auth, createJob);
router.post("/editJob", auth, editJob);
router.get("/getAllApplicants", auth, getAllApplicantsForJob);
router.put("/hireJobSeeker", auth,  hireJobSeeker);
router.get("/getAllJobsByCreator", auth,  getAllJobsByCreator);
router.post("/applyForJob", auth, applyForJob);
router.delete("/deleteJob", deleteJob);

 
module.exports = router