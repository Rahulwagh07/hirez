const express = require("express")
const router = express.Router()
const {auth} = require("../middlewares/auth")

 
//Certifications Routes
const {
    addCertification,
    getAllCertifications,
    updateCertification,
    deleteCertification,
} = require("../controllers/portfolio/Certification")

router.post("/addCertification", auth, addCertification)
router.get("/getAllCertification", auth, getAllCertifications)
router.put("/updateCertification", auth, updateCertification)
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
    addSocialMediaProfile,
    updateSocialMediaProfile,
    deleteSocialMediaProfile,
    addContentSample,
    updateContentSamples,
    deleteContentSample,
    getMedia,
} = require("../controllers/portfolio/Media")

router.put("/updateMediaGallery", auth, updateMediaGallery)
router.put("/updateSocialMediaProfile", auth, updateSocialMediaProfile)
router.post("/addSocialMediaProfile", auth, addSocialMediaProfile)
router.post("/addContentSample", auth, addContentSample)
router.put("/updateContentSamples", auth, updateContentSamples)   
router.get("/getMedia", auth, getMedia)
router.delete("/deleteContentSample", auth, deleteContentSample)
router.delete("/deleteSocailMediaProfile", auth, deleteSocialMediaProfile)

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
    deleteResume,
    getResume,
} = require("../controllers/portfolio/Resume")

router.put("/updateResume", auth, updateResume)
router.delete("/deleteResume", auth, deleteResume)
router.get("/getResume", auth, getResume)


module.exports = router