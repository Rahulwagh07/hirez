import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { ACCOUNT_TYPE } from '../../../utils/constants';
import { useState } from 'react';
import {toast} from "react-hot-toast"
import Tab from '../../common/Tab';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { setSignupData } from '../../../slices/authSlice';
import { sendOtp } from '../../../services/operations/authAPI';
 

function SignupForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.JOBSEEKER)

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { firstName, lastName, email, password, confirmPassword } = formData

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
      }

      // Handle Form Submission
    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
        toast.error("Passwords Do Not Match")
        return
        }
        const signupData = {
        ...formData,
        accountType,
        }

        // Setting signup data to state
        // To be used after otp verification
        dispatch(setSignupData(signupData))
        // Send OTP to user for verification
        dispatch(sendOtp(formData.email, navigate))

        // Reset
        setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        })
        setAccountType(ACCOUNT_TYPE.JOBSEEKER)
    }

     // data to pass to Tab component
    const tabData = [
        {
        id: 1,
        tabName: "JobSeeker",
        type: ACCOUNT_TYPE.JOBSEEKER,
        },
        {
        id: 2,
        tabName: "Creator",
        type: ACCOUNT_TYPE.CREATOR,
        },
    ]

  return (
    <div className='lg:w-[500px] flex flex-col items-center justify-center text-black'>
        <Tab tabData={tabData} field={accountType} setField={setAccountType}/>

        <form onSubmit={handleOnSubmit} className="flex w-full flex-col items-center justify-center gap-4 lg:w-[380px]">
        <div className="flex sm:flex-col items-center justify-center gap-4">
          <label>
            <p className="mb-1">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              className="h-[50px] sm:h-[42px] sm:w-[260px] rounded-md border border-sky-500 dark:bg-slate-700 focus:outline-none pl-2"
            />
          </label>
          <label>
            <p className="mb-1">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              className="h-[50px] sm:h-[42px]  sm:w-[260px] rounded-md border border-sky-500 dark:bg-slate-700 focus:outline-none pl-2"
            />
          </label>
        </div>
        <label className="w-full mr-4 ml-4 sm:mr-0">
          <p className="mb-1">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="w-full sm:h-[42px] sm:items-center sm:w-[260px] h-[50px] rounded-md  border border-sky-500 focus:outline-none dark:bg-slate-700 pl-2"
          />
        </label>
        <div className="flex gap-x-4 sm:flex-col sm:gap-2">
          <label className="relative">
            <p className="mb-1">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="h-[50px] sm:h-[42px] sm:w-[260px] rounded-md border border-sky-500  dark:bg-slate-700 focus:outline-none pl-2"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-[38px] z-[10] cursor-pointer mt-1"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative">
            <p className="mb-1">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="h-[50px] sm:h-[42px] sm:w-[260px] rounded-md border border-sky-500  dark:bg-slate-700 focus:outline-none pl-2"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-2 top-[38px] z-[10] cursor-pointer mt-1"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-150 sm:w-[260px] py-2 px-4 rounded flex items-center justify-center mb-4 w-full h-[50px]"
        >
          Next  
        </button>
      </form>
    </div>
  )
}

export default SignupForm