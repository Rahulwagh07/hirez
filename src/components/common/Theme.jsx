import React, { useState, useEffect } from 'react';
import { LuMoonStar } from "react-icons/lu";
import { CiLight } from 'react-icons/ci';

function Theme() {
  const initialTheme = localStorage.getItem('theme') || 'light';
  const [theme, setThemes] = useState(initialTheme);

  // Function to toggle the theme
  const toggleTheme = () => {
    setThemes((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); 
  };

  // Effect to apply the theme to the body element and update local storage
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? <LuMoonStar size={28} className='text-sky-500'   />
             : <CiLight size={28} className='text-sky-500'/>}
    </button>
  );
}

export default Theme;
