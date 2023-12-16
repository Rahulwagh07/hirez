import JobInfo from "./JobInfo";

 
export default function AddCourse() {
  return (
    <>
      <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-black">
            Add Job
          </h1>
          <div className="flex-1">
            <JobInfo/>
          </div>
        </div>
        {/* TO do add the a csrd about job upload tips */}
           
      </div>
    </>
  )
}
