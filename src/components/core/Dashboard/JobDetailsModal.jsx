import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { addToSavedJob } from '../../../slices/saveJobSlice';
import { applyForJob } from '../../../services/operations/jobDetailsAPI';
import { useNavigate } from "react-router-dom"
 
function JobDetailsModal({job}) {

  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)
  const { title, description, skillRequired, category, salary, status, location} = job;
  const totalApplicants = 5;  //to do
  const navigate = useNavigate()

  const handleOnClickSave = () => {
    dispatch(addToSavedJob(job))
  }

  const handleOnClickApply = async () => {
    try {
      // Send a request to apply for the job
      const result = await applyForJob(job._id, token);
      // Check if the application was successful
      if (result) {
        // You can handle success, for example, show a success message or update the UI
        console.log('Job applied successfully:', result);
        navigate("/dashboard/applied-jobs");
      }
    } catch (error) {
      // Handle any errors that occurred during the application
      console.error('Error applying for job:', error.message);
    }
  };
  
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border border-richblue-200 section_bg p-6">
          <div className='flex flex-col justify-center items-center gap-4'>
              <p>{title}</p>
            <div className='flex'>
                <p>Experience 0-2 years</p>
                <p> salary <span>{salary}</span></p>
            </div>
            <p>location  <span>{location}</span></p>
            <div className='flex gap-2'>
              <p>posted <span>5 Days ago</span></p>  
              <p>opening <span>1</span> </p>  
              <p>Applicants <span>{totalApplicants}</span></p>
            </div>
            <div className='flex gap-4'>
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