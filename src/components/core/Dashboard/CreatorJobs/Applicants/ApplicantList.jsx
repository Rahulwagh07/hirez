import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 

const ApplicantList = ({ applicantions }) => {

  const { token } = useSelector((state) => state.auth)
   
  const navigate = useNavigate()
  const handleOnClick = (ApplicationID, applicantId) => {
   // const result = changeApplicationStatus(ApplicationID, token)     //To do
   navigate(`applicant-portfolio/${applicantId}`); //Goint to the route /dashboard/posted-job/:jobId/applicant-portfolio/:applicantId
  }
 
  return (
    
      <div className='flex flex-col gap-4'>
        {applicantions.map((applicantion) => (
          <div key={applicantion._id}
           className='flex flex-col gap-4 section_bg p-5 box-shadow'>
            <p>Name: <span>{`${applicantion.applicant.firstName} ${applicantion.applicant.lastName}`} </span></p>  
            <p>Email: <span>{applicantion.applicant.email}</span></p> 
           {/* <p>{applicant.applicant._id}</p>   userID */}
            <p>Status: <span>{applicantion.status}</span></p>  
            <button onClick={() => handleOnClick(applicantion._id, applicantion.applicant._id)} className='bg-blue-150'>
                View profile
            </button>
          </div>
        ))}
      </div>
    
  );
};

export default ApplicantList;
