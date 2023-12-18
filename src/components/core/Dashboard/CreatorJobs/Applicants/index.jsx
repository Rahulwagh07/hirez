import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getAllApplicantsForJob } from '../../../../../services/operations/jobDetailsAPI';
import ApplicantList from './ApplicantList';  
export default function Applicants() {
  const { token } = useSelector((state) => state.auth);
  const [applicants, setApplicants] = useState([]);
  const [totalApplicants, setTotalApplicants] = useState(0);
  const { jobId } = useParams();

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const data = await getAllApplicantsForJob(jobId, token);
        console.log('API Response:', data);
        setApplicants(data.data);
        setTotalApplicants(data.data.length);
      } catch (error) {
        console.error('Error fetching applicants:', error);
      }
    };

    fetchApplicants();
  }, [jobId, token]);

  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <h3>Total Applicants: {totalApplicants}</h3>
      {
        totalApplicants > 0 ?  (
            <ApplicantList applicants={applicants} />
        ) : (
            <p className='section_bg text-lg p-8'>No one Applied for this job till now</p>
        ) 
      }
       
    </div>
  );
}
