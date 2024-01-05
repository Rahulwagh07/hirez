import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center lg:text-lg lg:px-8 lg:py-5 md:py-4 md:px-6 sm:py-2 sm:px-4 rounded-md font-semibold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
          active ? "bg-blue-150 text-white-25" : "section_bg border-brand dark:bg-slate-900"
        } hover:shadow-none hover:scale-95 transition-all duration-200 `}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
