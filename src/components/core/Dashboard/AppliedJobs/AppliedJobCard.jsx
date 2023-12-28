import React from 'react';
import { MdCurrencyRupee } from "react-icons/md";


function AppliedJobCard({ job }) {
  const { title, description, salary, status, creator, location} = job.job || {}; 
  const applicationStatus = job.status;
  const { firstName, lastName } = creator || {};
  console.log( "job", job)

  return (
    <div className="bg-white p-4 rounded-md shadow-md text-pure-greys-800">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-pure-greys-600 mb-2">{description}</p>

      <div className="grid lg:grid-cols-2 gap-4 mt-2">
        <p>Application status: <span className="font-semibold">{applicationStatus}</span></p>
        <p>Job status: <span className="font-semibold">{status}</span></p>
        <p>Salary: <span className="font-semibold">{salary}</span></p>
        <p>Creator: <span className="font-semibold">{firstName} { lastName}</span></p>
        <p>Location: <span className="font-semibold">{location}</span></p>
         
    </div>
       

    </div>
  );
}

export default AppliedJobCard;
