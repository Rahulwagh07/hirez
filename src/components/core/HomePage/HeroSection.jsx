import React from 'react'
import CTAButton from "./CTAButton"
import HeroSectionimg from "../../../assets/HeoSectionimg.jpg"

function HeroSection() {
  return (
    <div className='w-10/12 flex mt-20 gap-20'>
        <div className='flex flex-col gap-10 w-6/12'>
            <h2 className='text-5xl text-blue-150'>Find the best talent for your content creation</h2>
            <p className='text-lg '>Hire the skilled video editors, scripts writeres, thumbnail designers, and more.
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
        <div className='w-6/12'>
            <img src={HeroSectionimg} 
                loading='lazy'
                alt='image hero section'
                className='object-cover rounded-md h-[400px] w-[500px]'
                />
        </div>

    </div>
  )
}

export default HeroSection








 
