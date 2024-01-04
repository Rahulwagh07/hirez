import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneOutgoing } from "react-icons/fi";
 


const UserProfileCard = ({ user }) => {
  return (
    <div className=" flex sm:flex-col items-center gap-20 sm:gap-2 bg-white shadow-lg p-8 rounded-md text-center">
       
      <div className='sm:flex  items-center gap-6'> 
      <img src={user.image} loading='lazy' alt="User Profile" className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-blue-150" />
      <h2 className="text-2xl font-bold mb-2">{user.firstName} {user.lastName}</h2>
      </div>
      
      <div className='flex flex-col gap-9 sm:gap-2 items-start'>
      {user.additionalDetails.about && (
        <div>
          <p >{user.additionalDetails.about}</p>
        </div>
      )}
     
      <div className="flex items-center sm:gap-2 sm:flex-col sm:items-start justify-center space-x-4 sm:space-x-0 mb-4">
      {user.email && (
          <div className="flex items-center">
            <MdOutlineEmail className='text-blue-150 text-lg'/>
            <span className="ml-2">{user.email}</span>
          </div>
        )}
        {user.additionalDetails.contactNumber && (
          <div className="flex items-center">
            <FiPhoneOutgoing  className='text-blue-150 text-lg'/>
            <span className="ml-2">{user.additionalDetails.contactNumber}</span>
          </div>
        )}
      </div>

      </div>
      
    </div>
  );
};

export default UserProfileCard;
