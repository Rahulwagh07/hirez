import React from 'react';

const ApplicantList = ({ applicants }) => {
  return (
    
      <div className='section_bg p-6'>
        {applicants.map((applicant) => (
          <div key={applicant._id}
           className='flex flex-col gap-4'>
            <p>Name: <span>{`${applicant.applicant.firstName} ${applicant.applicant.lastName}`} </span></p>  
            <p>Email: <span>{applicant.applicant.email}</span></p>  
            <p>Status: <span>{applicant.status}</span></p>  
            <hr/>
          </div>
        ))}
      </div>
    
  );
};

export default ApplicantList;
