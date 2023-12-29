import React, { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
/* global google */

function GoogleSignin() {
  const handleGoogleLogin = () => {
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: CLIENT_ID,
    });
  }, []);

  return (
    <button
      onClick={() => {
        google.accounts.id.prompt(handleGoogleLogin);
      }}
      className='bg-black text-richblack-25 py-2 px-4 rounded flex items-center justify-center mb-4 lg:w-[325px] h-[50px]'
    >
      <FcGoogle className='mr-4' />
      <p className='font-semibold'>Continue with Google</p>
    </button>
  );
}

export default GoogleSignin;
