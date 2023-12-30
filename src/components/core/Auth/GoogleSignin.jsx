import React from 'react';
import { FcGoogle } from 'react-icons/fc';
 
function GoogleSignin() {
  const handleGoogleLogin = () => {
  };

  

  return (
    <button
      onClick={handleGoogleLogin}
      className='bg-black text-richblack-25 py-2 px-4 rounded flex items-center justify-center mb-4 lg:w-[325px] h-[50px]'
    >
      <FcGoogle className='mr-4' />
      <p className='font-semibold'>Continue with Google</p>
    </button>
  );
}

export default GoogleSignin;
