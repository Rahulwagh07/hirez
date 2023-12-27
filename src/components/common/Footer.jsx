import React from 'react';
import logo from "../../assets/logo.png"
 

const Footer = () => {
  return (
    <footer className="bg-indigo-500 text-white py-20 mt-20 text-white-25 font-semibold">
      <div className="container mx-auto grid sm:grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Column 1 */}
        <div className='flex flex-col items-start gap-3'>
            <img src={logo} loading='lazy' alt='Hireup logo' className='h-16 w-20 rounded-full'/>
            <h3 className="text-xl font-bold uppercase">HireUp</h3>
          <p className='text-base max-w-[300px]'>Making Hiring easy for content creators.</p>
        </div>

          {/* Column 2 */}
         <div className='flex  justify-between'>
          <div className='flex flex-col gap-2'>
              <h3 className="text-lg font-bold mb-4">Menu</h3>
              <a href="#">About us</a> 
              <a href="#">Contact us</a> 
              <a href="#">About us</a> 
            </div>
            
            <div className='flex flex-col gap-2'>
              <h3 className="text-lg font-bold mb-4">Services</h3>
                <a href="#">Privacy Policy</a> 
                <a href="#">Term of use</a>  
                
            </div>
         </div>

        {/* Column 3 */}
        <div className='flex flex-col gap-2'>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p>Email: support@hireup.com</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-16">
        <p> Copyright &copy; 2023 HireUp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
