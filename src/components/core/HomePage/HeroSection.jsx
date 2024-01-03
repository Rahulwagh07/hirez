import React from 'react'
import CTAButton from "./CTAButton"
import homepageImg from "../../../assets/homepage2.png"

function HeroSection() {   
  return (
    <div className="mt-5 w-full flex flex-col items-center">
      <div className='mx-auto flex w-9/12 max-w-maxContent flex-col lg:mb-16 justify-between gap-10 mt-20'>
      <div className='grid lg:grid-cols-2 place-items-center gap-10'>
        <div className='flex flex-col gap-10'>
            <h2 className='text-5xl font-bold text-blue-150'>Find the best 
            <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#38b6ff] text-transparent bg-clip-text'> Talent </span>for your content creation</h2>
            <p className='font-semibold text-pure-greys-300 text-xl'>Hire the skilled video editors, scripts writeres, thumbnail designers, and more.
            Post a job or search for a talented professionals on HireUp</p>
            <div className='flex gap-8'>
                <CTAButton active={true} linkto={"/signup"}>
                  Get Started
                </CTAButton>
                <CTAButton active={false} linkto={"/signup"}>
                    Learn more
                </CTAButton>
            </div>

        </div>

        {/* right part */}
        <div className=''>
            <img src={homepageImg} 
                loading='lazy'
                alt='hero section'
                className='object-cover'
                />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection








 
