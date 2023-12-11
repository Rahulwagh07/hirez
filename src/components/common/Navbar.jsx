import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { useSelector } from 'react-redux'
import { ACCOUNT_TYPE } from '../../utils/constants'
import ProfileDropdown from '../core/Auth/ProfileDropdown'
import { IoMdNotificationsOutline } from "react-icons/io";


function Navbar() {
    const {token} = useSelector((state) => state.auth)
    const {user} = useSelector((state)  => state.auth)
    const location = useLocation();

    const [Loading, setLoading] = useState(false);

    let notifications = 1;

  return (
    //remove the static height  of 100px from here
    <div className='flex items-center justify-center transition-all duration-300 section_bg py-4 box-shadow h-[100px]'>
        <nav className='flex justify-between max-w-maxScreen w-10/12'>
            <Link to={"/"} className='flex gap-4 '>
                <img src={logo} className='w-12 h-12'/>
                <h3 className='mt-3 text-lg'>Hire Studio</h3>
            </Link>
            <ul className='items-center md:flex gap-x-4'>
                <li className='py-5 text-lg leading-5 flex gap-1 items-center hover:text-[#6674CC] transition-all duration-150'>
                    <a href='/about' target='_blank'>About us</a>
                </li>
                <li className='py-5 text-lg leading-5 flex gap-1 items-center hover:text-[#6674CC] transition-all duration-150'>
                    <a href='/contact' target='_blank'>Contact us</a>
                </li>
                <li className='py-5 text-lg leading-5 flex gap-1 items-center hover:text-[#6674CC] transition-all duration-150'>
                    <a href='#feature'>Features</a>
                </li>
            </ul>
        
            {/* LOGIN AND SIGNUP */}
            <div className="hidden items-center gap-x-4 md:flex">
                {user && user?.accountType !== ACCOUNT_TYPE.CREATOR && (
                    <Link to="/dashboard/cart" className="relative">
                    <IoMdNotificationsOutline className="text-2xl text-black" />
                    {notifications > 0 && (
                        <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                        {notifications}
                        </span>
                    )}
                    </Link>
                )}
                 
          {token === null && (
            <Link to="/login">
              <button className="rounded-md xl:text-lg text-sm border-brand  items-center px-7 py-2">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-md xl:text-lg text-sm border-brand  items-center px-7 py-2">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>

             
        </nav>
    </div>
  )
}

export default Navbar