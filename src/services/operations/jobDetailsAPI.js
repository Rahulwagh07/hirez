import {toast} from "react-hot-toast"

import { apiConnector } from "../apiConnector"
import { jobEndPoints } from "../apis"

const {
    GET_ALL_APPLIEDJOBS_API,
    GET_JOB_DETAILS_API,
    CREATE_JOB_API,
    EDIT_JOB_API,
    DELETE_JOB_API,
    GET_ALL_APPLICANTS_FOR_JOB_API,
    HIRE_JOBSEEKER_API,
    GET_ALL_JOBS_BY_CREATOR_API,
    APPLY_FOR_JOB_API,
    GET_ALL_OPEN_JOBS,
    CHANGE_APPLICATION_STATUS_API,
    GET_APPLICATION_STATUS_API,
} = jobEndPoints

export const addJobDetails = async (data, token) => {
    const toastId = toast.loading("Loading..")
    let result = null

    try{
        const response = await apiConnector("POST", CREATE_JOB_API, data, {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        })
        if(!response?.data?.success){
            throw new Error("Job Details not added Successffully")
        }
        toast.success("Course Details added successfully")
        result = response?.data?.data
    } catch (error){
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result

}

export const editJobDetails = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading....")

    try{
        const response = await apiConnector("POST", EDIT_JOB_API, data, { 
           "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        })
        if(!response?.data?.success) {
            throw new Error("Could not update Job details")
        }
        toast.success("Job Details Updated Successfully")
        result = response?.data?.data
    } catch (error){
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const getFullJobDetails = async (jobId, token) => {
    const toastId = toast.loading("Loading...")
    let result = null
    try{
        const response = await apiConnector(
            "POST",
            GET_JOB_DETAILS_API,
            {
                jobId,
            },
            {
                Authorization: `Bearer ${token}`,
            }
        )

        if (!response.data.success) {
            throw new Error(response.data.message)
        }
        result = response?.data?.data
    } catch(error){
        result = error.response.data
        toast.error(error.response.data.message);
    }
    toast.dismiss(toastId)
    return result
}

export const  deleteJob = async (data, token) => {
    const toastId = toast.loading("Loading..")

    try{
        const response = await apiConnector("DELETE", DELETE_JOB_API, data, {
            Authorization: `Bearer ${token}`,
        })

        if(!response?.data?.success) {
            throw new Error("JOb is not Deleted")
        }
        toast.success("Job Deleted")
    }  catch(error){
        toast.error(error.message)
    }
    toast.dismiss(toastId)
}

export const getAllJobsByCreator = async (token) => {
    let result = []

    const toastId = toast.loading("Loading...")
    try{
        const response  = await apiConnector("GET", GET_ALL_JOBS_BY_CREATOR_API, null, 
            {
                Authorization: `Bearer ${token}`,
            }
        )
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Creators  JOBS")
        }
        result = response?.data?.data
    } catch (error){
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}


export const getAllJobs = async (searchParams, token) => {
    let result = [];

    try {
        const response = await apiConnector("POST", GET_ALL_OPEN_JOBS,
        {
            searchParams: searchParams,
        }, 
        {
            Authorization: `Bearer ${token}`,
           
        });

        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Jobs");
        }

        result = response?.data?.data;
    } catch (error) {
        toast.error(error.message);
    }
    return result;
};


export const applyForJob = async (jobId, token) => {
    let result = null;
    try {
      const response = await apiConnector(
        'POST',
        APPLY_FOR_JOB_API,  
        { jobId },
        {
          Authorization: `Bearer ${token}`,
        }
      );

      if (!response?.data?.success) {
        throw new Error("Could Not Apply the Job successfully");
      }
  
      result = response?.data?.data;
      toast.success('Applied for Job successfully');
    } catch (error) {
        if (error.response.data.isApplied) {
            toast.success("Already Applied For Job");
            return;
        }
        console.error(error);
        toast.error("Failed To Apply... Try again");
    }
    return;
  };
 

  export const getAppliedJobs = async (token) => {
    const toastId = toast.loading("Loading..")
    let result = null
    try {

       const response = await apiConnector('GET', GET_ALL_APPLIEDJOBS_API, null, {
        Authorization: `Bearer ${token}`,
      });
  
      if (!response?.data?.success) {
        throw new Error('Failed to fetch applied jobs');
      }
      result = response?.data?.data;
    } catch (error) {
      console.error('Get Applied Jobs API Error:', error);
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  };

  export const getAllApplicantsForJob = async (jobId, token) => {
    let result = null;
    try {
      const response = await apiConnector('GET', `${GET_ALL_APPLICANTS_FOR_JOB_API}?jobId=${jobId}`, null, {
        Authorization: `Bearer ${token}`
      });
      result = response.data;
    } catch (error) {
      console.error('Get All Applicants API Error:', error);
    }
    return result;
  };

  export const changeApplicationStatus = async (applicationId, token) => {
    try {
        const response = await apiConnector(
            'PUT',
            CHANGE_APPLICATION_STATUS_API,
            { applicationId },
            {
                Authorization: `Bearer ${token}`,
            }
        );

    } catch (error) {
        console.error('Change Application status API Error:', error);
    }
};

export const getApplicationStatus = async (jobId, applicantId, token) => {
    let result;
    try{
        const response = await apiConnector('GET',  GET_APPLICATION_STATUS_API, {jobId, applicantId}, {
            Authorization: `Bearer ${token}`
          });


          if(!response?.data?.success){
            result = response.data;
          }
    } catch(error){
        console.error(error);
    }
    return result;
}

export const hireJobSeeker =  async (jobId, applicantId, token) => {
    let result;
    try{
        const response = await apiConnector('PUT',  HIRE_JOBSEEKER_API, {jobId, applicantId}, {
            Authorization: `Bearer ${token}`
          });

        if(response?.data?.success){
            result = response
        }
    } catch(error){
        console.error("Hire Jobseeker API Error", error)
    }
    return result;
}
  