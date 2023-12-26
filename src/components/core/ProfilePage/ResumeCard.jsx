import React from 'react';
import { FaDownload } from 'react-icons/fa';

const ResumeCard = ({ name, url }) => {
  return (
    <div className="p-6 flex flex-col">
      <h2 className="text-lg font-bold mb-4">{name}</h2>
      <a
        className="flex gap-2 items-center"
        href={url}  
        download
        target='_blank'  
      >
        <FaDownload className="text-blue-150" />
        <p>Download Resume</p>
      </a>
      
    </div>
  );
};

export default ResumeCard;
