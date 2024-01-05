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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    
     
    if(loading) {
        return (
            <div className="grid place-items-center">
                <div >Loading....</div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-medium text-black">
            Edit job
          </h1>
          <div className="mt-4 max-w-[600px]">
            {job ? (
              <JobInfo/>
            ) : (
              <p className="mt-14 text-center text-3xl font-semibold text-pure-greys-600">
                Job not found
              </p>
            )}
          </div>
        </div>
      )
    
}

 