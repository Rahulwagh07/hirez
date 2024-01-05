import React from 'react';
import { useState } from 'react';

const CustomInput = ({ id, label, type, placeholder, register, error }) => {

  const [inputType, setInputType] = useState('text');

  const handleFocus = () => {
    setInputType('date');
  };

  return (
    <div className="flex flex-col space-y-2 text-pure-greys-600 dark:text-slate-400">
      <label className="text-sm" htmlFor={id}>
        {label} <sup className="text-pink-200">*</sup>
      </label>
      {type === 'date' ? (
       
        <input
          id={id}
          type={inputType}
          placeholder="Enter date"
          onFocus={handleFocus}
          {...register(id, { required: true })}
          className="form-style w-full sm:w-[260px] border-sky-500 border"
        />
      
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


 
