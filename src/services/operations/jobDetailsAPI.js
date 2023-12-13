import {toast} from "react-hot-toast"

import { apiConnector } from "../apiConnector"
import { jobEndPoints } from "../apis"

const {
    GET_ALL_APPLIEDJOBS_API,
    GET_JOB_DETAILS_API,
    CREATE_JOB_API,
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
            throw new Erro("Job Details not added Successffully")
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