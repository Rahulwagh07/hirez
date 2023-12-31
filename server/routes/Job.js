const express = require("express");
const router = express.Router();
const {auth, isCreator, isJobSeeker} = require("../middlewares/auth")

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
    getAllJobs,
    changeApplicationStatus,
    getApplicationStatus,
} = require("../controllers/Job")


// Routes for Jobs
router.get("/getAppliedJobs", auth, isJobSeeker, getAllAppliedJobs);
router.post("/getJobDetails", auth, getJobDetails);
router.post("/createJob", auth, createJob);
router.post("/editJob", auth, isCreator, editJob);
router.get("/getAllApplicantsForJob", auth, getAllApplicantsForJob);
router.put("/hireJobSeeker", auth,  isCreator, hireJobSeeker);
router.get("/getAllJobsByCreator", auth,  getAllJobsByCreator);
router.post("/applyForJob", auth, applyForJob);
router.delete("/deleteJob", deleteJob);
router.post("/getAllJobs", auth, getAllJobs);
router.put("/changeApplicationStatus", auth, isCreator, changeApplicationStatus);
router.get("/getApplicationStatus", auth, getApplicationStatus);


module.exports = router