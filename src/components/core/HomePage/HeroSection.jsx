import React from 'react'
import CTAButton from "./CTAButton"
import img from "../../../assets/homepage.png"
 
function HeroSection() {   
 
  return (
    <div className="mt-5 w-full flex flex-col items-center">
      <div className='mx-auto flex w-9/12 max-w-maxContent flex-col lg:mb-16 justify-between md:mt-16 lg:mt-20'>
      <div className='grid lg:grid-cols-2  gap-10'>
        <div className='flex flex-col gap-10'>
            <h2 className='lg:text-5xl md:text-4xl sm:text-3xl font-bold text-blue-150'>Find the best 
            <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#38b6ff] text-transparent bg-clip-text'> Talent </span>for your content creation</h2>
            <p className=' text-pure-greys-300 dark:text-slate-400 text-xl sm:text-lg'>Hire the skilled video editors, scripts writeres, thumbnail designers, and more.
            Post a job or search for a talented professionals on HireZ</p>
            <div className='flex gap-8'>
                <CTAButton active={true} linkto={"/login"}>
                  Get Started
                </CTAButton>
                <CTAButton active={false} linkto={"/login"}>
                    Learn more
                </CTAButton>
            </div>

        </div>

        {/* right part */}
        <div className=''>
            <img 
                src={img} 
                loading='lazy'
                alt='hero section'
                className='object-cover m-0'
                />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection








 
