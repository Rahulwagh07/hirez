const BASE_URL = process.env.REACT_APP_BASE_URL


//Auth endpoints
export const endpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
  }

  //job endpoints
  export const profileEndpoints = {
    GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
    GET_APPLICANT_DETAIL_API: BASE_URL + "/profile/getApplicantProfile",
  }

  export const jobEndPoints = {
    GET_ALL_APPLIEDJOBS_API: BASE_URL + "/job/getAppliedJobs",
    GET_JOB_DETAILS_API: BASE_URL + "/job/getJobDetails",
    CREATE_JOB_API: BASE_URL + "/job/createJob",
    EDIT_JOB_API: BASE_URL + "/job/editJob",
    DELETE_JOB_API : BASE_URL + "/job/deletJob",
    GET_ALL_APPLICANTS_FOR_JOB_API: BASE_URL + "/job/getAllApplicantsForJob",
    HIRE_JOBSEEKER_API: BASE_URL + "/job/hireJobSeeker",
    GET_ALL_JOBS_BY_CREATOR_API: BASE_URL + "/job/getAllJobsByCreator",
    APPLY_FOR_JOB_API: BASE_URL +  "/job/applyForJob",
    GET_ALL_OPEN_JOBS: BASE_URL + "/job/getAllJobs",
  }
//Setting page endpoints
  export const settingsEndpoints = {
    UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
    UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
    CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
    DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
  }

// Portfolio endpoints
export const portfolioEndpoints = {
  // Certifications Routes
  ADD_CERTIFICATION_API: BASE_URL + "/portfolio/addCertification",
  GET_ALL_CERTIFICATION_API : BASE_URL + "/portfolio/getAllCertification",
  UPDATE_CERTIFICATION_API: BASE_URL + "/portfolio/updateCertification",
  DELETE_CERTIFICATION_API: BASE_URL + "/portfolio/deleteCertification",


  // Education Routes
  ADD_EDUCATION_API: BASE_URL + "/portfolio/addEducation",
  GET_ALL_EDUCATION_API: BASE_URL + "/portfolio/getAllEducation",
  UPDATE_EDUCATION_API: BASE_URL + "/portfolio/updateEducation",
  DELETE_EDUCATION_API: BASE_URL + "/portfolio/deleteEducation",

  // Experience Routes
  ADD_EXPERIENCE_API: BASE_URL + "/portfolio/addExperience",
  GET_ALL_EXPERIENCE_API: BASE_URL + "/portfolio/getAllExperience",
  UPDATE_EXPERIENCE_API: BASE_URL + "/portfolio/updateExperience",
  DELETE_EXPERIENCE_API: BASE_URL + "/portfolio/deleteExperience",

  // Media Routes
  UPDATE_MEDIA_GALLERY_API: BASE_URL + "/portfolio/updateMediaGallery",
  ADD_CONTENT_SAMPLE_API: BASE_URL + "/portfolio/addContentSample",
  UPDATE_CONTENT_SAMPLES_API: BASE_URL + "/portfolio/updateContentSamples",
  DELETE_CONTENT_SAMPLE_API: BASE_URL + "/portfolio/deleteContentSample",

  ADD_SOCIAL_MEDIA_PROFILE_API: BASE_URL + "/portfolio/addSocialMediaProfile",
  UPDATE_SOCIAL_MEDIA_PROFILE_API: BASE_URL + "/portfolio/updateSocialMediaProfile",
  DELETE_SOCIAL_MEDIA_PROFILE_API: BASE_URL + "/portfolio/deleteSocailMediaProfile",
  
  GET_MEDIA_API: BASE_URL + "/portfolio/getMedia",


  // Project Routes
  ADD_PROJECT_API: BASE_URL + "/portfolio/addProject",
  GET_ALL_PROJECTS_API: BASE_URL + "/portfolio/getAllProjects",
  UPDATE_PROJECTS_API: BASE_URL + "/portfolio/updateProjects",
  DELETE_PROJECT_API: BASE_URL + "/portfolio/deleteProject",

  // Resume Routes
  UPDATE_RESUME_API: BASE_URL + "/portfolio/updateResume",
  DELETE_RESUME_API: BASE_URL + "/portfolio/deleteResume",
  GET_RESUME_API: BASE_URL + "/portfolio/getResume",
};
