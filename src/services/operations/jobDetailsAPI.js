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
} = jobEndPoints

export const addJobDetails = async (data, token) => {
    const toastId = toast.loading("Loading..")
    let result = null

    try{
        const response = await apiConnector("POST", CREATE_JOB_API, data, {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        })
        console.log("Crete Job API response...", response)
        if(!response?.data?.success){
            throw new Error("Job Details not added Successffully")
        }
        toast.success("Course Details added successfully")
        result = response?.data?.data
    } catch (error){
        console.log("create job api error.....", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result

}

export const editJobDetails = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading....")

    try{
        const response = await apiConnector("POST", EDIT_JOB_API, { 
           "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        })
        console.log("EDIT JOB API RESPONSE", response)
        if(!response?.data?.success) {
            throw new Error("Could not update Job details")
        }
        toast.success("Job Details Updated Successfully")
        result = response?.data?.data
    } catch (error){
        console.log("Edit Job API error...", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const getFullJobDetails = async (jobId, token) => {
    const toastId = toast.loading("Loading...")
    let result = null

    try{
        const response = await apiConnector("GET", GET_JOB_DETAILS_API + `/${jobId}`, null, {
            Authorization: `Bearer ${token}`,
        });

        if(!response.data.success){
            throw new Error(response.data.message)
        }
        result = response?.data.data

    } catch(error) {
        console.log("GET JOB details API error....", error)
        result = error.response.data
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

        console.log("Delete JOb API response...", response)
        if(!response?.data?.success) {
            throw new Error("JOb is not Deleted")
        }
        toast.success("Job Deleted")
    }  catch(error){
        console.log("DELTE JOB API ERROR", error)
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
        console.log("Creator  jobs API ERROR...", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}