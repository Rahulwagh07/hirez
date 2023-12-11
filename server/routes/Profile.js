const express = require("express")
const router = express.Router()
const {auth} = require("../middlewares/auth")

const {
    updateProfile,
    updateDisplayPicture,
    getJobSeekerProfile,
    getAllUserDetails,
} = require("../controllers/Profile")

router.put("/updateProfile", auth, updateProfile)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
router.get("/getJobSeekerDetails", auth, getJobSeekerProfile);
router.get("/getUserDetails", auth, getAllUserDetails);

module.exports = router