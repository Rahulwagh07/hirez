import React from 'react';
import { MdDateRange } from "react-icons/md";

const CustomInput = ({ id, label, type, placeholder, register, error }) => {
  return (
    <div className="flex flex-col space-y-2 text-pure-greys-600 dark:text-slate-400">
      <label className="text-sm" htmlFor={id}>
        {label} <sup className="text-pink-200">*</sup>
      </label>
      {type === 'date' ? (
        <div className=' relative'>
        <input
          id={id}
          type={type}
          {...register(id, { required: true })}
          className="form-style w-full sm:w-[260px] border-sky-500 border"
        />
        <span className='absolute text-sky-500 hidden dark:block top-4 right-4 '><MdDateRange/></span>
        </div>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(id, { required: true })}
          className="form-style w-full sm:w-[260px] border-sky-500 border"
        />
      )}
      {error && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">{error}</span>
      )}
    </div>
  );
};

export default CustomInput;


 
