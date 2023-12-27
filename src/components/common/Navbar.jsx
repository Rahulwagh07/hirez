import React  from 'react'
import { Link} from 'react-router-dom'
import logo from "../../assets/logo.png"
import { useSelector } from 'react-redux'
import { ACCOUNT_TYPE } from '../../utils/constants'
import ProfileDropdown from '../core/Auth/ProfileDropdown'
import { IoMdNotificationsOutline } from "react-icons/io";


function Navbar() {
    const {token} = useSelector((state) => state.auth)
    const {user} = useSelector((state)  => state.auth)
     

    

  return (
    
    <div className='flex items-center justify-center transition-all duration-300 section_bg py-4 box-shadow'>
        <nav className='flex justify-between max-w-maxScreen w-10/12 lg:text-lg'>
            <Link to={"/"} className='flex gap-4 '>
                <img src={logo} className='w-12 h-12'/>
                <h3 className='mt-3'>HireUp</h3>
            </Link>
            <ul className='items-center flex gap-x-4'>
                <li className='py-5  leading-5 flex gap-1 items-center hover:text-[#6674CC] transition-all duration-150'>
                    <a href='/about' target='_blank'>About us</a>
                </li>
                <li className='py-5 leading-5 flex gap-1 items-center hover:text-[#6674CC] transition-all duration-150'>
                    <a href='/contact' target='_blank'>Contact us</a>
                </li>
                <li className='py-5 leading-5 flex gap-1 items-center hover:text-[#6674CC] transition-all duration-150'>
                    <a href='#feature'>Features</a>
                </li>
            </ul>
        
            {/* LOGIN AND SIGNUP */}
            <div className="flex items-center gap-8">
                    
              {token === null && (
                <Link to="/login">
                  <button className="rounded-md  border-brand items-center px-7 py-2">
                    Log in
                  </button>
                </Link>
              )}
              {token === null && (
                <Link to="/signup">
                  <button className="rounded-md border-brand items-center px-7 py-2">
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