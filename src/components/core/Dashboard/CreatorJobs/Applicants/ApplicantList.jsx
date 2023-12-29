import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeApplicationStatus } from '../../../../../services/operations/jobDetailsAPI';
 

const ApplicantList = ({ applicantions }) => {

  const { token } = useSelector((state) => state.auth)
   
  const navigate = useNavigate()

  const handleOnClick = (applicationId, applicantId) => {
   changeApplicationStatus(applicationId, token)   
   navigate(`applicant-portfolio/${applicantId}`); //Goint to the route /dashboard/posted-job/:jobId/applicant-portfolio/:applicantId
  }
 
  return (
    
      <div className='grid lg:grid-cols-2 gap-14 mt-4'>
        {applicantions.map((applicantion) => (
          <div key={applicantion._id}
           className='flex flex-col gap-4 section_bg p-5 shadow-lg items-start'>
            <p>Name: <span>{`${applicantion.applicant.firstName} ${applicantion.applicant.lastName}`} </span></p>  
            <p>Email: <span>{applicantion.applicant.email}</span></p> 
            <p>Status: <span>{applicantion.status}</span></p>  
            <button onClick={() => handleOnClick(applicantion._id, applicantion.applicant._id)}
              className='bg-blue-150 px-3 py-2 rounded-md'
            >
                View profile
            </button>
          </div>
        ))}
      </div>
    
  );
};

export default ApplicantList;
