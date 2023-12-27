import React from 'react'
import { IoArrowBackSharp } from "react-icons/io5";
import LoginForm from './LoginForm';

const LoginTemplate = () => {
  return (
    <div className='section_bg box-shadow flex flex-col mx-auto justify-center items-center p-20'>
        <p className="font-bold">Welcome Back!</p>
        <LoginForm/>
    </div>
  )
}

export default LoginTemplate