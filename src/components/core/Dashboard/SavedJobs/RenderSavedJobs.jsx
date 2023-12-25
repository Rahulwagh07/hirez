 import {useSelector } from "react-redux"
import JobCard from "../CreatorJobs/JobCard"
 

export default function RenderSavedJobs() {
  const { saveJob } = useSelector((state) => state.saveJob)
  return (
    <div className="flex gap-4 flex-col">
    {saveJob.map((job) => (
        <JobCard key={job._id} job={job} />
    ))}
  </div>
  )
}



 