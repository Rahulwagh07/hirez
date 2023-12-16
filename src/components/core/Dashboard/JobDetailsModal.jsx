import React from 'react'
 
function JobDetailsModal({job}) {
  console.log("PRINGITN JOB", job)
  const { title, description, skillRequired, category, salary, status, location} = job;
  const totalApplicants = 5;  //to do

  const handleOnClickSave = () => {
//add to saved jobs
  }
  const handleOnClickApply = () => {
//apply for job
  }
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6">
          <div className='flex flex-col justify-center items-center gap-4'>
              <p>{title}</p>
            <div className='flex'>
                <p>Experience 0-2 years</p>
                <p>{salary}</p>
            </div>
            <p>{location}</p>
            <div className='flex'>
              <p>posted <span>5 Days ago</span></p>  
              <p>opening <span>1</span> </p>  
              <p>Applicants <span>{totalApplicants}</span></p>
            </div>
            <div className='flex'>
              <button onClick={handleOnClickSave}
              className='rounded-md xl:text-lg text-sm border-brand  items-center px-7 py-2'>
                    Save
              </button>
              <button onClick={handleOnClickApply}
              className='rounded-md xl:text-lg text-sm border-brand bg-blue-150  items-center px-7 py-2 '>
                Apply
              </button>
            </div>
         </div>
      </div>
    </div>
  )
}

export default JobDetailsModal