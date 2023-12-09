import React from 'react';
import logo from "../../assets/logo.png"
 

const Footer = () => {
  return (
    <footer className="bg-indigo-500 text-white py-20 mt-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className='flex flex-col'>
        <img src={logo} className='mx-auto mb-4 h-16 w-20 md:mx-0 rounded-full'/>
          <h3 className="text-xl font-bold uppercase">Hire Studio</h3>
          <p className='mt-4 text-base max-w-[300px]'>About your company and what you do.</p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-center">Quick Links</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">About us</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-center">Services</h3>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Term of use</a></li>
            <li><a href="#">About us</a></li>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-center">Contact Us</h3>
          <p>Email: support@hirestudio.com</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p>&copy; 2023 Hire Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
