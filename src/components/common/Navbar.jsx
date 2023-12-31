import React  from 'react'
import { Link} from 'react-router-dom'
import logo from "../../assets/logo.png"
import { useSelector } from 'react-redux'
import ProfileDropdown from '../core/Auth/ProfileDropdown'
import { Link as ScrollLink } from 'react-scroll';
import { NavbarLinks } from '../../data/navbarLinks'
import {useLocation } from "react-router-dom"

function Navbar() {

  const {token} = useSelector((state) => state.auth)
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';
    
  return (
    
    <div className='flex items-center justify-center transition-all duration-300 section_bg py-4 box-shadow'>
        <nav className='flex justify-between max-w-maxScreen w-10/12 lg:text-lg'>
            <Link to={"/"} className='flex gap-4 '>
                <img src={logo} className='w-12 h-12'/>
                <h3 className='mt-3 text-blue-150 font-semibold'>HireUp</h3>
            </Link>
              
              {
                isHomeRoute  && 
                <div className='flex items-center gap-x-12'>
                  {NavbarLinks.map((link, index) => (
                      <li key={index} className='py-5 leading-5 flex gap-1 items-center hover:text-[#6674CC] transition-all duration-150 cursor-pointer'>
                        <ScrollLink
                          to={link.path}
                          smooth={true}
                          duration={1000}
                          offset={-70}
                          spy={true}
                          exact="true"
                          activeClass="active"
                        >
                          {link.title}
                        </ScrollLink>
                      </li>
                    ))}
                  </div>
              }
            
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