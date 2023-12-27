import React from 'react'
import SignupForm from '../components/core/Auth/SignupForm'
import GoogleSignin from '../components/core/Auth/GoogleSignin'

function Signup() {
  return (
      <div className='flex flex-col items-center justify-center lg:mt-8'>
        <div className='flex flex-col items-center justify-center section_bg p-8'>
            <h3 className='font-bold text-lg'>Create an account</h3>
            <SignupForm/>
            <GoogleSignin/>
         </div>
      </div>
  )
}

export default Signup