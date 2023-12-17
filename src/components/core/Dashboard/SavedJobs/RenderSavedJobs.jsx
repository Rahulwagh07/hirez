import { FaStar } from "react-icons/fa"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import JobCard from "../CreatorJobs/JobCard"

import { removeFromSavedJob } from "../../../../slices/saveJobSlice"

export default function RenderSavedJobs() {
  const { saveJob } = useSelector((state) => state.saveJob)
  const dispatch = useDispatch()
  return (
    <div className="flex gap-4 flex-col">
    {saveJob.map((job) => (
      <div key={job._id} className="section_bg">
        <JobCard key={job._id} job={job} />
        <button
          onClick={() => dispatch(removeFromSavedJob(job._id))}
          className="flex items-center gap-x-1 rounded-md border border-richblue-500 bg-blue-150 py-3 px-[12px] text-white"
        >
          <RiDeleteBin6Line />
          <span>Remove</span>
        </button>
      </div>
    ))}
  </div>
  )
}



 