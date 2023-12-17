import React from 'react';

const FilterCheckboxGroup = ({ title, options, value, onChange }) => (
  <div>
    <p className='text-black font-semibold'>{title}</p>
    {options.map((option) => (
      <label key={option} className='flex gap-2'>
        <input
          type="checkbox"
          value={option}
          checked={value.includes(option)}
          onChange={() => onChange(option)}
        />
        {option}
      </label>
    ))}
  </div>
);

export default FilterCheckboxGroup;
