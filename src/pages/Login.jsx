import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import LoginTemplate from '../components/core/Auth/LoginTemplate';
import { useState } from 'react';
import GoogleSignin from '../components/core/Auth/GoogleSignin';
import {Link } from "react-router-dom"

function Login() {
    const [showLoginTemplate, setShowLoginTemplate] = useState(false);

    const handelOnEmailLogin = () => {
        setShowLoginTemplate(true);
    }

  return (
    <div className='flex items-center justify-center lg:mt-20'>
        {
        !showLoginTemplate && 
            <div className=' section_bg  box-shadow flex flex-col justify-center items-center p-16'>
                <h3 className='text-lg font-semibold mb-4 flex flex-start'>Log in to HireUp</h3>

                {/* Google Login */}
                <GoogleSignin/>

                {/* Email Login */}
                <button onClick={handelOnEmailLogin}  className='bg-blue-150 text-white py-2 px-4 rounded flex items-center justify-center mb-4 w-[325px] h-[50px]'>
                    <MdOutlineMailOutline className='mr-3' />
                    <p className='font-semibold'>Continue with Email</p>
                </button>

                {/* Don't have an account? Sign up text */}
                <div className='text-center'>
                    <Link to="/signup">
                        Don't have an account? <span className='font-semibold cursor-pointer hover:text-blue-150'>Sign up</span>
                    </Link>
                </div>
            </div>
        }
        {
            showLoginTemplate && <LoginTemplate/>
        }

    </div>
  )
}

export default Login