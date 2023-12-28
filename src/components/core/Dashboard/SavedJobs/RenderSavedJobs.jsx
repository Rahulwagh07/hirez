 import {useSelector } from "react-redux"
import JobCard from "../CreatorJobs/JobCard"
 

export default function RenderSavedJobs() {
  const { saveJob } = useSelector((state) => state.saveJob)
  return (
    <div className="grid lg:grid-cols-1 mt-5 gap-4">
    {saveJob.map((job) => (
        <JobCard key={job._id} job={job} />
    ))}
  </div>
  )
}



 