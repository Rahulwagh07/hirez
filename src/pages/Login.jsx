import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import LoginTemplate from '../components/core/Auth/LoginTemplate';
import { useState } from 'react';
import {Link } from "react-router-dom"
import GoogleLogin from '../components/core/Auth/GoogleLogin';
import { FcGoogle } from 'react-icons/fc';

function Login() {
    const [showLoginTemplate, setShowLoginTemplate] = useState(false);
    const [showGoogleLogin, setShowGoogleLogin] = useState(false)
 
    const handelOnEmailLogin = () => {
        setShowLoginTemplate(true);
    }
    const handleGoogleLogin = () => {
        setShowGoogleLogin(true);
    }
 

  return (
    <div className='flex items-center justify-center mt-20'>
        {
            showGoogleLogin === false ? (
                <>
                {
        !showLoginTemplate && 
            <div className=' shadow-lg flex flex-col justify-center items-center p-16'>
                <h3 className='text-lg font-semibold mb-4 flex flex-start'>Log in to HireUp</h3>

                {/* Google Login */}
                <button
                    onClick={handleGoogleLogin}
                    className='bg-black text-richblack-25 py-2 px-4 rounded flex items-center justify-center mb-4 sm:w-[260px] w-[325px] h-[50px]'
                    >
                    <FcGoogle className='mr-4' />
                    <p className='font-semibold'>Continue with Google</p>
                </button>
                

                {/* Email Login */}
                <button onClick={handelOnEmailLogin}  className='bg-blue-150 text-white py-2 px-4 rounded flex items-center justify-center mb-4 sm:w-[260px] w-[325px] h-[50px]'>
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
                </>
            ) : <GoogleLogin/>
        }

    </div>
  )
}

export default Login