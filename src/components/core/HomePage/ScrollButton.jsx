import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { IoIosArrowRoundDown } from "react-icons/io";

function ScrollButton() {
  return (
    <div className="flex items-center justify-center text-blue-150 cursor-pointer mt-20">
      <ScrollLink
        to={"#feature"}  
        smooth={true}
        duration={1000}
        offset={-70}
        spy={true}
        exact="true"
        activeClass="active"
        className="flex"
      >
        <span className='text-pure-greys-400 font-semibold text-sm'>Scroll Down</span>
        <IoIosArrowRoundDown className='text-blue-150 text-xl font-semibold ml-0'/>
      </ScrollLink>
    </div>
  );
}

export default ScrollButton;
