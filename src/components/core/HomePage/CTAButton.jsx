import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center  text-sm px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
          active ? "bg-blue-150" : "text-blue-150 bg-richblack-25"
        } hover:shadow-none hover:scale-95 transition-all duration-200 `}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
