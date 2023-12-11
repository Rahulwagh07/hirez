import React from 'react'
import { IoArrowBackSharp } from "react-icons/io5";
import LoginForm from './LoginForm';

const LoginTemplate = () => {
  return (
    <div className='bg-white-25 flex flex-col mx-auto justify-center items-center p-8 h-[400px] w-[528px]'>
        <p className="font-bold">Welcome Back!</p>
        <LoginForm/>
    </div>
  )
}

export default LoginTemplate