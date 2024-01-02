import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getRecommendedJobs } from '../../../../services/operations/jobDetailsAPI';
import JobCard from '../CreatorJobs/JobCard';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

function RecommendedJobs() {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate()

  const interestedRole = user?.additionalDetails.role;
   

  const fetchRecommendedJobs = async() => {
    try{
      const response =  await getRecommendedJobs(interestedRole, token)
      setJobs(response.data);
    } catch(error){
      console.error("Fetch Reccommended jobs error", error)
    }
  }
  
  useEffect(() => {
    fetchRecommendedJobs();
  }, []);


  return (
    <div className='flex flex-col gap-4 mt-8'>
     <p className='font-semibold'>Recommended Jobs</p>
      <hr className='text-sky-500'/>
      {
        jobs?.length > 0 ? (
          <div>
            {
              jobs.map((job) => (
                        <div key={job._id} 
                            className="flex flex-col gap-2 mt-4">
                        <JobCard key={job._id} job={job} onRecommoneded={true}/>
                        </div>
                    ))
            }
          </div>
        ) : (
          <div className=' flex flex-col shadow-lg  p-12 gap-4 items-center justify-center'>
          <p className='text-pure-greys-500 font-semibold'>"Looks like you haven't chosen your preferred role yet. <br/> Discover personalized 
          job recommendations by selecting your interested role now!"</p>
          <button
            onClick={() => {
              navigate("/dashboard/settings/update-profile");
            }}
            className="rounded-md border-brand bg-blue-150 items-center text-white-25 px-7 py-2 flex"
          >
            Select <FaArrowRight className="ml-2"/>
          </button>
          </div>
        )
      }
    </div>
  )
}

export default RecommendedJobs