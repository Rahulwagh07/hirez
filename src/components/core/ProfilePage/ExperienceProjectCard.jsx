import React from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { ImCompass } from "react-icons/im";
import { GoArrowUpRight } from "react-icons/go";



 

const ExperienceProjectCard = ({ title, fieldOfStudy, company, location, startDate, endDate, description, link }) => {
  return (
    <div className="p-6">
      <div className='flex items-center justify-between'>
        <h2 className="text-lg font-semibold mb-4 text-black">{title}
        
        {
          fieldOfStudy && <span> | {fieldOfStudy}</span>
        }
        </h2>
        {/* Date */}
        {startDate && endDate && (
          <div className="flex items-center space-x-4  mb-4 sm:hidden">
            <div className="flex items-center">
              <CiCalendarDate className="mr-2 text-blue-500 text-lg" />
              <span>{new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}</span>
            </div>
          </div>
        )}
      </div>
       {/* Description */}
       {description && (
        <p className="text-pure-greys-600 dark:text-slate-400 mb-4">{description}</p>
      )}


       <div className='flex gap-3'>
            {/* Company */}
          {company && (
            <div className="flex items-center space-x-4 text-greys-600 mb-4">
              <div className="flex items-center">
                <ImCompass className="mr-2 text-blue-150 text-lg" />
                <span>{company}</span>
              </div>
            </div>
          )}

          {/* Location */}
          {location && (
            <div className="flex items-center space-x-4 text-gray-600 mb-4">
              <div className="flex items-center">
                <CiLocationOn className="mr-2 text-blue-150 text-lg" />
                <span>{location}</span>
              </div>
            </div>
          )}
       </div>

      {/* Link */}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500  flex  items-center">
          <span className="mr-2">View</span>
          <GoArrowUpRight className='mt-1'/>
        </a>
      )}
    </div>
  );
};

export default ExperienceProjectCard;
