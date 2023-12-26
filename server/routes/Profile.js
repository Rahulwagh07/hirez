const express = require("express")
const router = express.Router()
const {auth, isCreator} = require("../middlewares/auth")

const {
    updateProfile,
    updateDisplayPicture,
    getJobSeekerProfile,
    getAllUserDetails,
    deleteAccount,
    getApplicantProfile,
} = require("../controllers/Profile")

router.put("/updateProfile", auth, updateProfile)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
router.get("/getJobSeekerDetails", auth, getJobSeekerProfile);
router.get("/getUserDetails", auth, getAllUserDetails);
router.delete("/deleteProfile", auth, deleteAccount)
router.get("/getApplicantProfile/:applicantId", auth, getApplicantProfile)

module.exports = router