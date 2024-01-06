import React, { useState, useEffect } from 'react';
import { LuMoonStar } from "react-icons/lu";
import { CiLight } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { setTheme } from '../../slices/themeSlice';

function Theme() {
  // const initialTheme = localStorage.getItem('theme') || 'light';
  // const [theme, setThemes] = useState(initialTheme);
  
  // const { theme: reduxTheme} = useSelector((state) => state.theme)
  // Function to toggle the theme
  const {theme} = useSelector((state) => state.theme)
  const [currentTheme, setCurrentTheme] = useState(theme)

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); 
    setTheme(currentTheme);
  };

 
  // Effect to apply the theme to the body element and update local storage
  useEffect(() => {
    document.body.classList.toggle('dark', currentTheme === 'dark');
    localStorage.setItem('theme', currentTheme);
    setTheme(currentTheme);

  }, [currentTheme]);

  return (
    <button onClick={toggleTheme}>
      {currentTheme === 'light' ? <LuMoonStar size={28} className='text-sky-500'   />
             : <CiLight size={28} className='text-sky-500'/>}
    </button>
  );
}

export default Theme;
