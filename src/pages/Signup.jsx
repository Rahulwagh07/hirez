import React from 'react'
import SignupForm from '../components/core/Auth/SignupForm'
import GoogleSignin from '../components/core/Auth/GoogleSignup'
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

function Signup() {
  const [showAccountType, setShowAccountType] = useState(false);
  const handleOnClick = () =>{
    setShowAccountType(true);
  }
  return (
      <div>
        {
          !showAccountType && (
            <div className='flex flex-col items-center justify-center lg:mt-8'>
              <div className='flex flex-col items-center justify-center shadow-lg p-8 mb-4'>
                  <h3 className='font-bold text-lg'>Create an account</h3>
                  <SignupForm/>

                  {/* GoogleSignUP */}
                  <button
                    onClick={handleOnClick}
                    className='bg-black text-richblack-25  py-2 px-4 rounded flex items-center justify-center mb-4 w-full lg:w-[380px] h-[50px]'
                  >
                    <FcGoogle className='mr-4' />
                    <p className='font-semibold'>Continue with Google</p>
                  </button>
              </div>
            </div>
                )
              }
              {
                showAccountType && <GoogleSignin/>
              }
            </div>
  )
}

export default Signup