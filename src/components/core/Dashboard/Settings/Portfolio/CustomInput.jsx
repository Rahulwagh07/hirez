import React from 'react';

const CustomInput = ({ id, label, type, placeholder, register, error }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-black" htmlFor={id}>
        {label} <sup className="text-pink-200">*</sup>
      </label>
      {type === 'date' ? (
        <input
          id={id}
          type={type}
          {...register(id, { required: true })}
          className="form-style w-full"
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(id, { required: true })}
          className="form-style w-full"
        />
      )}
      {error && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">{error}</span>
      )}
    </div>
  );
};

export default CustomInput;


 
