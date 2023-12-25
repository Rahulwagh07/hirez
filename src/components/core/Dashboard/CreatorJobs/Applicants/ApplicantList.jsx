import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 

const ApplicantList = ({ applicants }) => {

  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const handleOnClick = (ApplicationID) => {
   // const result = changeApplicationStatus(ApplicationID, token)     //To do
    navigate("applicant-portfolio")  //Goint to the route /dashboard/posted-job/:jobId/applicant-portfolio
  }
 
  return (
    
      <div className='flex flex-col gap-4'>
        {applicants.map((applicant) => (
          <div key={applicant._id}
           className='flex flex-col gap-4 section_bg p-5 box-shadow'>
            <p>Name: <span>{`${applicant.applicant.firstName} ${applicant.applicant.lastName}`} </span></p>  
            <p>Email: <span>{applicant.applicant.email}</span></p> 
           {/* <p>{applicant.applicant._id}</p>   userID */}
            <p>Status: <span>{applicant.status}</span></p>  
            <button onClick={() => handleOnClick(applicant._id)} className='bg-blue-150'>
                View profile
            </button>
          </div>
        ))}
      </div>
    
  );
};

export default ApplicantList;
