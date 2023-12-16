import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setEditJob, setJob } from "../../../../slices/jobSlice";
import JobInfo from "../PostNewJob/JobInfo";

import { getFullJobDetails } from "../../../../services/operations/jobDetailsAPI";
 
export default function EditJob() {
    const { jobId } = useParams()
    const { job } = useSelector((state) => state.job) 
    const [loading, setLoading] = useState(false)
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
     

    useEffect(() => {
      const fetchData = async () => {
        
        try {
          setLoading(true);
          const result = await getFullJobDetails(jobId, token);
          if (result?.jobDetails) {
            console.log("INSIDE IF");
            dispatch(setEditJob(true));
            dispatch(setJob(result?.jobDetails));
          }
        } catch (error) {
          console.error('Error fetching job details:', error);
        } finally {
          setLoading(false);
        }
      };
    
      fetchData();  
    }, []);
    
    
     
    if(loading) {
        return (
            <div className="grid flex-1 place-items-center">
                <div >Loading....</div>
            </div>
        )
    }

    return (
        <div>
          <h1 className="mb-14 text-3xl font-medium text-black">
            Edit job
          </h1>
          <div className="mx-auto max-w-[600px]">
            {job ? (
              <JobInfo/>
            ) : (
              <p className="mt-14 text-center text-3xl font-semibold text-richblack-100">
                Job not found
              </p>
            )}
          </div>
        </div>
      )
    
}

 