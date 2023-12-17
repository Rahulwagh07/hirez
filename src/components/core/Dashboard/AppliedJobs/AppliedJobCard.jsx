import React from 'react';

function AppliedJobCard({ job }) {
  const { title, description, salary, status, creator } = job.job || {};
  const applicationStatus = job.status;
  const { firstName, lastName } = creator || {};

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <div className="flex items-center mb-2">
        <span className="text-sm text-gray-500"> Job Status:</span>
        <span className="ml-2 text-sm font-semibold">{status}</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-sm text-gray-500">Salary:</span>
        <span className="ml-2 text-sm font-semibold">{salary}</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-sm text-gray-500">Application Status:</span>
        <span className="ml-2 text-sm font-semibold">{applicationStatus}</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-sm text-gray-500">Creator:</span>
        <span className="ml-2 text-sm font-semibold">{firstName} {lastName}</span>
      </div>
    </div>
  );
}

export default AppliedJobCard;
