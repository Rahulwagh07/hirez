import React from 'react';
import { GoDownload } from "react-icons/go";

const ResumeCard = ({ name, url }) => {
  return (
    <div className="p-6 flex flex-col">
      <h2 className="text-lg font-semibold text-black mb-4">{name}</h2>
      <a
        className="flex gap-2 items-center"
        href={url}  
        download
        target='_blank'  
      >
        <p>Download Resume</p>
        <GoDownload className="text-blue-150 text-lg" />
      </a>
      
    </div>
  );
};

export default ResumeCard;
