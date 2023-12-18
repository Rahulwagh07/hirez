const express = require("express")
const router = express.Router()
const {auth} = require("../middlewares/auth")

 
//Certifications Routes
const {
    addCertification,
    deleteCertification,
} = require("../controllers/portfolio/Certification")

router.post("/addCertification", auth, addCertification)
router.delete("/deleteCertification", auth, deleteCertification)

//Education Routes
const {
    addEducation,
    getAllEducations,
    updateEducation,
    deleteEducation,
} = require("../controllers/portfolio/Education")

router.post("/addEducation", auth, addEducation)
router.get("/getAllEducation", auth, getAllEducations)
router.put("/updateEducation", auth, updateEducation)
router.delete("/deleteEducation", auth, deleteEducation)



//Experience Routes
const {
    addExperience,
    getAllExperiences,
    updateExperiences,
    deleteExperience,
} = require("../controllers/portfolio/Experience")

router.post("/addExperience", auth, addExperience)
router.get("/getAllExperience", auth, getAllExperiences)
router.put("/updateExperience", auth, updateExperiences)
router.delete("/deleteExperience", auth, deleteExperience)

//Media Routes
const {
    updateMediaGallery,
    updateSocialMediaLinks,
    addContentSample,
    updateContentSamples,
} = require("../controllers/portfolio/Media")

router.put("/updateMediaGallery", auth, updateMediaGallery)
router.put("/updateSocialMediaLinks", auth, updateSocialMediaLinks)
router.post("/addContentSample", auth, addContentSample)
router.put("/updateContentSamples", auth, updateContentSamples)  // TO DO change this contoller to delete content sample


//Project Routes
const {
    addProject,
    getAllProjects,
    updateProjects,
    deleteProject,
} = require("../controllers/portfolio/Project")

router.post("/addProject", auth, addProject)
router.get("/getAllProjects", auth, getAllProjects)
router.put("/updateProjects", auth, updateProjects)
router.delete("/deleteProject", auth, deleteProject)
 
//Resume Routes
const {
    updateResume,
} = require("../controllers/portfolio/Resume")

router.put("/updateResume", auth, updateResume)


module.exports = router