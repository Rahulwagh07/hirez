import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineFacebook } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";



function CircleAnimation() {
  return (
 <div className='flex flex-col lg:flex-row lg:gap-52 gap-32 items-center justify-center py-32'>
    <div className='flex flex-col  justify-center gap-6'>
        <h2 className='font-bold text-2xl text-blue-150'>Job Opportunity</h2>
        <h3 className='text-5xl sm:text-3xl font-bold'>Unlock your potential</h3>
        <p className='font-semibold text-pure-greys-400 dark:text-slate-500 text-xl'>Get Offers from Top Content Creators <br/>Across Different Platforms</p>
    </div>
    {/* main div */}
    <div className='relative flex items-center justify-center'>
        {/* outer circle*/}
        <div  className='relative flex h-96 w-96 items-center justify-center  circle_animation
                    rounded-full border border-sky-500 transition-all'>
            <div className='crotate absolute h-16 w-16 top-[-28px] left-[160px]'>
                <FaTiktok className='icon_style rounded-md'/></div>

            <div className='crotate absolute h-16 w-16 top-[100px] left-[-20px]'>
                <GrInstagram className='icon_style text-red-500'/></div>

            <div className='crotate absolute h-16 w-16 top-[270px] left-[0px]'>
                <RiTwitterXLine className='icon_style'/></div>

            <div className='crotate absolute h-16 w-16 top-[270px] left-[320px]'>
                <MdOutlineFacebook className='icon_style bg-purple-100 rounded-full'/></div>

            <div className='crotate absolute h-16 w-16 top-[100px] left-[340px]'>
                <FaYoutube className='icon_style text-red-500'/></div>

            <div className='crotate absolute h-16 w-16 top-[354px] left-[170px]'>
                <FaLinkedin className='icon_style text-blue-500'/></div>

            {/* Inner Circle */}
        <div className='circle_animation2 relative grid h-60 w-60 place-content-center rounded-full bg-blue-150 sm:h-72 sm:w-72 p-12'>
            <div className='h-32 w-32 rounded-full bg-[#fff] sm:h-40 sm:w-40'>
                <div className='crotate2 absolute h-16 w-16 top-[34px] left-[110px] sm:top-[34px] sm:left-[90px]'>
                    <MdOutlineFacebook className='icon_style bg-purple-100 rounded-full'/></div>

                <div className='crotate2 absolute h-16 w-16 top-[140px] left-[60px] sm:top-[130px] sm:left-[38px]'>
                    <FaLinkedin className='icon_style text-blue-500 rounded-md'/></div>

                <div className='crotate2  absolute h-16 w-16 top-[120px] left-[141px] sm:top-[180px] sm:left-[135px]'>
                    <FaYoutube className='icon_style text-red-500'/></div>

                <div className='crotate absolute h-16 w-16 top-[54px] left-[34px] sm:top-[90px] sm:left-[185px]'>
                    <GrInstagram className='icon_style text-red-500'/></div>
            </div>
        </div>

        </div>
    </div>
 </div>
  )
}

export default CircleAnimation