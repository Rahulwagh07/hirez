import React from 'react';
import { MdCompost } from "react-icons/md";
import { CiStreamOn } from "react-icons/ci";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { MdJoinRight } from "react-icons/md";


const icons = {
   MdCompost,
   CiStreamOn,
   FaHandHoldingHeart,
   FaUsersRectangle,
   FaLightbulb,
   MdJoinRight,
 };
 
 const FeatureCard = ({ logo, title, description, borderBottomColor }) => {
   const cardStyle = {
     borderBottomColor: borderBottomColor,
   };
   const logoStyle = {
      backgroundColor: borderBottomColor,
   }
 
   const Icon = icons[logo];  
 
   return (
     <div className="flex min-h-[330px] max-w-[380px] flex-col items-center gap-y-4 px-4 py-12 border-b-4 rounded-md shadow-lg z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105" style={cardStyle}>
       <div className='rounded-full p-4'  style={logoStyle}>
         {Icon && <Icon/>}
       </div>
       <h3 className="text-lg font-bold mb-2">{title}</h3>
       <p className="text-pure-greys-500  dark:text-slate-500 text-base font-semibold text-opacity-80">{description}</p>
     </div>
   );
 };


 export default FeatureCard