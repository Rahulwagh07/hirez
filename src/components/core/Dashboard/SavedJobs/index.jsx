import { useSelector } from "react-redux"
import RenderSavedJobs from "./RenderSavedJobs"


export default function SavedJobs() {
  const { totalJobs } = useSelector((state) => state.saveJob)
 

  return (
    <>
      <h1 className="mb-14 text-3xl font-medium text-black">Saved Jobs</h1>
      <p className="border-b border-b-richblack-400 pb-2 font-semibold text-black">
        {totalJobs} Saved Jobs
      </p>
      {totalJobs > 0 ? (
        <div className="mt-8 flex flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row">
          <RenderSavedJobs />
        </div>
      ) : (
        <p className="mt-14 text-center text-3xl text-richblack-100">
          You not have saved Any job Yet
        </p>
      )}
    </>
  )
}
