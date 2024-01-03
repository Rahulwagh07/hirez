import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center lg:text-lg lg:px-8 lg:py-5 py-3 px-5 rounded-md font-semibold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
          active ? "bg-blue-150 text-white-25" : "section_bg border-brand"
        } hover:shadow-none hover:scale-95 transition-all duration-200 `}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
