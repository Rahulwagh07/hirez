import {toast} from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { portfolioEndpoints } from "../apis"
import { RiNurseFill } from "react-icons/ri";

const  {
  ADD_CERTIFICATION_API,
  GET_ALL_CERTIFICATION_API,
  UPDATE_CERTIFICATION_API,
  DELETE_CERTIFICATION_API,
  ADD_EDUCATION_API,
  GET_ALL_EDUCATION_API,
  UPDATE_EDUCATION_API,
  DELETE_EDUCATION_API,
  ADD_EXPERIENCE_API,
  GET_ALL_EXPERIENCE_API,
  UPDATE_EXPERIENCE_API,
  DELETE_EXPERIENCE_API,
  UPDATE_MEDIA_GALLERY_API,
  UPDATE_SOCIAL_MEDIA_LINKS_API,
  ADD_CONTENT_SAMPLE_API,
  UPDATE_CONTENT_SAMPLES_API,
  ADD_PROJECT_API,
  GET_ALL_PROJECTS_API,
  UPDATE_PROJECTS_API,
  DELETE_PROJECT_API,
  UPDATE_RESUME_API,
  DELETE_RESUME_API,
  GET_RESUME_API,
} = portfolioEndpoints

export const addCertification = async (data, token) => {
    const toastId = toast.loading("Adding Certification...");
  
    try {
      const response = await apiConnector("POST", ADD_CERTIFICATION_API, data, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  
      if (!response?.data?.success) {
        throw new Error("Certification not added successfully");
      }
  
      toast.success("Certification added successfully");
      return response.data.data;
    } catch (error) {
      console.error("addCertification error:", error.message);
      toast.error("Failed to add Certification");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };

  export const getAllCertifications = async (token) => {
    const toastId = toast.loading("Fetching Certifications...");
  
    try {
      const response = await apiConnector("GET", GET_ALL_CERTIFICATION_API, null, {
        Authorization: `Bearer ${token}`,
      });
  
      if (!response?.data?.success) {
        throw new Error("Failed to fetch Certifications");
      }
  
      return response.data.data;
    } catch (error) {
      console.error("getAllCertification error:", error.message);
      toast.error("Failed to fetch Certification");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };
  

  export const updateCertification = async (data, token) => {
    const toastId = toast.loading("Updating Certification...");
  
    try {
      const response = await apiConnector("PUT", UPDATE_CERTIFICATION_API, data, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  
      if (!response?.data?.success) {
        throw new Error("Certification not updated successfully");
      }
  
      toast.success("Certification updated successfully");
      return response.data.data;
    } catch (error) {
      console.error("updateCertification error:", error.message);
      toast.error("Failed to update Certification");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };
  
  
  export const deleteCertification = async (certificationId, token) => {
    const toastId = toast.loading("Deleting Certification...");
  
    try {
      const response = await apiConnector("DELETE", DELETE_CERTIFICATION_API, { certificationId }, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  
      if (!response?.data?.success) {
        throw new Error("Certification not deleted successfully");
      }
  
      toast.success("Certification deleted successfully");
      return response.data.data;
    } catch (error) {
      console.error("deleteCertification error:", error.message);
      toast.error("Failed to delete Certification");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };


  export const addEducation = async (data, token) => {
    const toastId = toast.loading("Adding Education...");
  
    try {
      const response = await apiConnector("POST", ADD_EDUCATION_API, data, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  
      if (!response?.data?.success) {
        throw new Error("Education not added successfully");
      }
  
      toast.success("Education added successfully");
      return response.data.data;
    } catch (error) {
      console.error("addEducation error:", error.message);
      toast.error("Failed to add Education");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };
  
  export const getAllEducations = async (token) => {
    const toastId = toast.loading("Fetching Education...");
  
    try {
      const response = await apiConnector("GET", GET_ALL_EDUCATION_API, null, {
        Authorization: `Bearer ${token}`,
      });
  
      if (!response?.data?.success) {
        throw new Error("Failed to fetch Education");
      }
  
      return response.data.data;
    } catch (error) {
      console.error("getAllEducations error:", error.message);
      toast.error("Failed to fetch Education");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };
  
  export const updateEducation = async (data, token) => {
    const toastId = toast.loading("Updating Education...");
  
    try {
      const response = await apiConnector("PUT", UPDATE_EDUCATION_API, data, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  
      if (!response?.data?.success) {
        throw new Error("Education not updated successfully");
      }
  
      toast.success("Education updated successfully");
      return response.data.data;
    } catch (error) {
      console.error("updateEducation error:", error.message);
      toast.error("Failed to update Education");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };
  
  export const deleteEducation = async (educationId, token) => {
    const toastId = toast.loading("Deleting Education...");
  
    try {
      const response = await apiConnector("DELETE", DELETE_EDUCATION_API, { educationId }, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  
      if (!response?.data?.success) {
        throw new Error("Education not deleted successfully");
      }
  
      toast.success("Education deleted successfully");
      return response.data.data;
    } catch (error) {
      console.error("deleteEducation error:", error.message);
      toast.error("Failed to delete Education");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };


  export const addExperience = async (data, token) => {
    const toastId = toast.loading("Adding Experience...");
  
    try {
      const response = await apiConnector("POST", ADD_EXPERIENCE_API, data, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  
      if (!response?.data?.success) {
        throw new Error("Experience not added successfully");
      }
  
      toast.success("Experience added successfully");
      return response.data.data;
    } catch (error) {
      console.error("addExperience error:", error.message);
      toast.error("Failed to add Experience");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };
  
  export const getAllExperiences = async (token) => {
    const toastId = toast.loading("Fetching Experiences...");
  
    try {
      const response = await apiConnector("GET", GET_ALL_EXPERIENCE_API, null, {
        Authorization: `Bearer ${token}`,
      });
  
      if (!response?.data?.success) {
        throw new Error("Failed to fetch Experiences");
      }
  
      return response.data.data;
    } catch (error) {
      console.error("getAllExperiences error:", error.message);
      toast.error("Failed to fetch Experiences");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };
  
  export const updateExperience = async (data, token) => {
    const toastId = toast.loading("Updating Experience...");
  
    try {
      const response = await apiConnector("PUT", UPDATE_EXPERIENCE_API, data, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  
      if (!response?.data?.success) {
        throw new Error("Experience not updated successfully");
      }
  
      toast.success("Experience updated successfully");
      return response.data.data;
    } catch (error) {
      console.error("updateExperience error:", error.message);
      toast.error("Failed to update Experience");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };
  
  export const deleteExperience = async (experienceId, token) => {
    const toastId = toast.loading("Deleting Experience...");
  
    try {
      const response = await apiConnector("DELETE", DELETE_EXPERIENCE_API, { experienceId }, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  
      if (!response?.data?.success) {
        throw new Error("Experience not deleted successfully");
      }
  
      toast.success("Experience deleted successfully");
      return response.data.data;
    } catch (error) {
      console.error("deleteExperience error:", error.message);
      toast.error("Failed to delete Experience");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };

  export const updateMediaGallery = async (mediaUrls, token) => {
    const toastId = toast.loading("Updating Media Gallery...");
  
    try {
      const response = await apiConnector("PUT", UPDATE_MEDIA_GALLERY_API, { mediaUrls }, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  
      if (!response?.data?.success) {
        throw new Error("Media Gallery not updated successfully");
      }
  
      toast.success("Media Gallery updated successfully");
      return response.data.data;
    } catch (error) {
      console.error("updateMediaGallery error:", error.message);
      toast.error("Failed to update Media Gallery");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };

  export const updateSocialMediaLinks = async (socialMediaLinks, token) => {
    const toastId = toast.loading("Updating Social Media Links...");
  
    try {
      const response = await apiConnector("PUT", UPDATE_SOCIAL_MEDIA_LINKS_API, { ...socialMediaLinks }, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  
      if (!response?.data?.success) {
        throw new Error("Social Media Links not updated successfully");
      }
  
      toast.success("Social Media Links updated successfully");
      return response.data.data;
    } catch (error) {
      console.error("updateSocialMediaLinks error:", error.message);
      toast.error("Failed to update Social Media Links");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };

  
  export const addContentSample = async (data, token) => {
    const toastId = toast.loading("Adding Content Sample...");
  
    try {
      const response = await apiConnector("POST", ADD_CONTENT_SAMPLE_API, data, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  
      if (!response?.data?.success) {
        throw new Error("Content Sample not added successfully");
      }
  
      toast.success("Content Sample added successfully");
      return response.data.data;
    } catch (error) {
      console.error("addContentSample error:", error.message);
      toast.error("Failed to add Content Sample");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };
  

  export const addProject = async (projectData, token) => {
    const toastId = toast.loading("Adding Project...");
  
    try {
      const response = await apiConnector("POST", ADD_PROJECT_API, projectData, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  
      if (!response?.data?.success) {
        throw new Error("Project not added successfully");
      }
  
      toast.success("Project added successfully");
      return response.data.data;
    } catch (error) {
      console.error("addProject error:", error.message);
      toast.error("Failed to add Project");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };

  export const getAllProjects = async (token) => {
    const toastId = toast.loading("Fetching Projects...");
  
    try {
      const response = await apiConnector("GET", GET_ALL_PROJECTS_API, null, {
        Authorization: `Bearer ${token}`,
      });
  
      if (!response?.data?.success) {
        throw new Error("Failed to fetch projects");
      }
  
      return response.data.data;
    } catch (error) {
      console.error("getAllProjects error:", error.message);
      toast.error("Failed to fetch projects");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };

  export const updateProjects = async (projectData, token) => {
    const toastId = toast.loading("Updating Project...");
  
    try {
      const response = await apiConnector("PUT", UPDATE_PROJECTS_API, projectData, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  
      if (!response?.data?.success) {
        throw new Error("Project not updated successfully");
      }
  
      toast.success("Project updated successfully");
      return response.data.data;
    } catch (error) {
      console.error("updateProjects error:", error.message);
      toast.error("Failed to update Project");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };
  
  export const deleteProject = async (projectId, token) => {
    const toastId = toast.loading("Deleting Project...");
  
    try {
      const response = await apiConnector("DELETE", DELETE_PROJECT_API, { projectId }, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  
      if (!response?.data?.success) {
        throw new Error("Project not deleted successfully");
      }
  
      toast.success("Project deleted successfully");
      return response.data.data;
    } catch (error) {
      console.error("deleteProject error:", error.message);
      toast.error("Failed to delete Project");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };

  export const updateResume = async (resumeFile, token) => {
    const toastId = toast.loading("Updating Resume...");
  
    try {
      const response = await apiConnector("PUT", UPDATE_RESUME_API, resumeFile, {
        Authorization: `Bearer ${token}`,
      });
  
      if (!response?.data?.success) {
        throw new Error("Resume not updated successfully");
      }
  
      toast.success("Resume updated successfully");
      return response.data.data;
    } catch (error) {
      console.error("updateResume error:", error.message);
      toast.error("Failed to update Resume");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };
  

  export const deleteResume = async(token) => {
    const toastId = toast.loading("deleting resume..")

    try{
      await apiConnector("DELETE", DELETE_RESUME_API, RiNurseFill, {
        Authorization: `Bearer ${token}`,
      });
      console.log("  RESUME deleted")
      
    } catch(error){
      console.error("Delet Resume error:", error.message);
      toast.error("Failed to Delete Resume");
      throw error;
    }
    finally {
      toast.dismiss(toastId);
    }
  }

  export const getResume = async (token) => {
    try {
      const response = await apiConnector("GET", GET_RESUME_API, null, {
        Authorization: `Bearer ${token}`,
      });
  
      if (!response?.data?.success) {
        throw new Error("Resume is Not uploaded Yet");
      }
      console.log("getResume response", response)
      return response;
    } catch (error) {
      console.error("get Resume  error:", error.message);
      throw error;
    } 
  };
