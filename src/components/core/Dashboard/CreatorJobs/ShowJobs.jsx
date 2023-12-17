 
import { useNavigate } from "react-router-dom";
import JobCard from "./JobCard"
  
export default function ShowJobs({ jobs, setJobs }) {
    const navigate = useNavigate()
   
    return (
            <div>
                {jobs?.length === 0 ? (
                    <div className="section_bg flex items-center justify-center">
                        <h3>No Jobs Found</h3>
                    </div>
                ) : (
                    jobs.map((job) => (
                        <div key={job._id} 
                            className="flex flex-col gap-2">
                        <JobCard key={job._id} job={job} setJobs={setJobs}/>
                        <div className="flex gap-3 mb-6">
                        <button  
                            onClick={() => {
                                navigate(`/dashboard/posted-job/${job._id}`)
                            }}
                            className="bg-blue-150 rounded-md xl:text-lg text-sm border-brand  items-center px-7 py-2">Review All Applicants</button>
                        </div>
                        </div>
                    ))
                )}
            </div>
 
    );
}

 