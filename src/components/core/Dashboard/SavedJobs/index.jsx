import { useSelector } from "react-redux"
import RenderSavedJobs from "./RenderSavedJobs"
import { useNavigate } from "react-router-dom"


export default function SavedJobs() {
  const { totalJobs } = useSelector((state) => state.saveJob)
  const navigate = useNavigate()

  return (
    <>
      <h1 className="mb-14 sm:mb-4 text-3xl font-medium text-black">Saved Jobs</h1>
      <p className="border-b border-b-sky-500 pb-2 font-semibold text-black">
        {totalJobs} Saved Jobs
      </p>
      {totalJobs > 0 ? (
        <RenderSavedJobs/>
        
      ) : (
        <div className="flex items-center justify-center shadow-lg p-12">
          <p className="text-xl text-pure-greys-500 sm:text-lg font-semibold">
            You not saved any job yet!  
            <span className="cursor-pointer text-blue-150 font-semibold underline"
              onClick={() => navigate("/dashboard/searchbar")}>  Start  </span> 
             by finding a job you like and hit that save button
          </p>
        </div>
      )}
    </>
  )
}
