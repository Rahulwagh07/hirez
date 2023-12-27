import React from 'react';
import { FaAnglesDown } from "react-icons/fa6";
import { Link as ScrollLink } from 'react-scroll';

 
function ScrollButton() {
  return (
    <div className="flex items-center justify-center  cursor-pointer hover:text-blue-150 mt-4">
      <ScrollLink
        to={"#feature"}  
        smooth={true}
        duration={1000}
        offset={-70}
        spy={true}
        exact="true"
        activeClass="active"
        className="mb-2"
      >
        <FaAnglesDown/>
      </ScrollLink>
    </div>
  );
}

export default ScrollButton;
