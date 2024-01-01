import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { addToSavedJob } from '../../../slices/saveJobSlice';
import { applyForJob } from '../../../services/operations/jobDetailsAPI';
import { useNavigate } from "react-router-dom"
import { RxCross2 } from "react-icons/rx";

function JobDetailsModal({job, setIsModalOpen}) {

  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)
  const { title, description, skillRequired, category, salary, status, location} = job;
  const navigate = useNavigate()

  const handleOnClickSave = () => {
    dispatch(addToSavedJob(job));
    handleCloseModal();

  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOnClickApply = async () => {
    try {
      const result = await applyForJob(job._id, token);
      if (result) {
        navigate("/dashboard/applied-jobs");
      }
    } catch (error) {
      console.error('Error applying for job:', error.message);
    }
    handleCloseModal();
  };
  
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-opacity-10 backdrop-blur-sm">
      <div className="relative max-w-[350px] flex flex-col gap-4 text-pure-greys-500 rounded-lg border border-sky-500 section_bg p-8">
          <RxCross2 size={24} onClick={handleCloseModal} className='absolute top-4 right-4 cursor-pointer'/>
          <p className='font-bold'>{title}</p>
          <div className='grid grid-cols-2 gap-4'>
            <p>Category:  <span className='font-semibold'>{category}</span></p>
            <p>Salary: <span className='font-semibold'>{salary}</span></p>
            <p>Required Skill: <span className='font-semibold'>{skillRequired}</span></p>
            <p>Location:  <span className='font-semibold'>{location}</span></p>
         </div>
         <div className='flex gap-6 font-semibold'>
              <button onClick={handleOnClickSave}
              className='rounded-md border-brand  items-center px-7 py-2'>
                    Save
              </button>
              <button onClick={handleOnClickApply}
              className='rounded-md border-brand bg-blue-150  items-center px-7 py-2 text-white-25'>
                Apply
              </button>
          </div>
      </div>
    </div>
  )
}

export default JobDetailsModal