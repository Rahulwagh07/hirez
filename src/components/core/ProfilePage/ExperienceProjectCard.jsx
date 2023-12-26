import React from 'react';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaLink } from 'react-icons/fa';
 

const ExperienceProjectCard = ({ title, fieldOfStudy, company, location, startDate, endDate, description, link }) => {
  return (
    <div className="p-6 border-b-2">
      <div className='flex items-center justify-between'>
        <h2 className="text-xl font-bold mb-4 ">{title}
        
        {
          fieldOfStudy && <span> | {fieldOfStudy}</span>
        }
        </h2>
        {/* Date */}
        {startDate && endDate && (
          <div className="flex items-center space-x-4 text-gray-600 mb-4">
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2" />
              <span>{new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}</span>
            </div>
          </div>
        )}
      </div>
       {/* Description */}
       {description && (
        <p className="text-gray-700 mb-4">{description}</p>
      )}


       <div className='flex gap-3'>
            {/* Company */}
          {company && (
            <div className="flex items-center space-x-4 text-gray-600 mb-4">
              <div className="flex items-center">
                <FaBuilding className="mr-2" />
                <span>{company}</span>
              </div>
            </div>
          )}

          {/* Location */}
          {location && (
            <div className="flex items-center space-x-4 text-gray-600 mb-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>{location}</span>
              </div>
            </div>
          )}
       </div>

      {/* Link */}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        <FaLink className="mr-2" />
          View Project
        </a>
      )}
    </div>
  );
};

export default ExperienceProjectCard;
