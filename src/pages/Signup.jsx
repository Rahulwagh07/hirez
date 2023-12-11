import React from 'react'
import SignupForm from '../components/core/Auth/SignupForm'
import GoogleSignin from '../components/core/Auth/GoogleSignin'

function Signup() {
  return (
     <div className='flex flex-col items-center justify-center section_bg box-shadow  gap-2  mx-auto px-4 sm:max-w-sm lg:max-w-lg lg:rounded-md'>
        <h3 className='font-bold text-lg'>Create an account</h3>
        <SignupForm/>
        <GoogleSignin/>

     </div>
  )
}

export default Signup