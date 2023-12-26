import React from 'react';
import { FaEnvelope} from 'react-icons/fa';
import { MdPhoneInTalk } from "react-icons/md";
 


const UserProfileCard = ({ user }) => {
  return (
    <div className=" flex items-center gap-20 bg-white shadow-lg p-8 rounded-md text-center">
       
      <div> 
      <img src={user.image} loading='lazy' alt="User Profile" className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-blue-500" />
      <h2 className="text-2xl font-bold mb-2">{user.firstName} {user.lastName}</h2>
      </div>
      
      <div className='flex flex-col gap-9 items-start'>
      {user.additionalDetails.about && (
        <div>
          <p >{user.additionalDetails.about}</p>
        </div>
      )}
     
      <div className="flex items-center justify-center space-x-4 mb-4">
        {user.additionalDetails.contactNumber && (
          <div className="flex items-center">
            <MdPhoneInTalk />
            <span className="ml-2">{user.additionalDetails.contactNumber}</span>
          </div>
        )}
        {user.email && (
          <div className="flex items-center">
            <FaEnvelope />
            <span className="ml-2">{user.email}</span>
          </div>
        )}
 
      </div>

      </div>
      
    </div>
  );
};

export default UserProfileCard;
