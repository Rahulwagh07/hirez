import React from 'react'
import HeroSection from '../components/core/HomePage/HeroSection'
import FeatureSection from '../components/core/HomePage/FeatureSection'
import Footer from '../components/common/Footer'
import ReviewSection from '../components/common/ReviewSection'
import ScrollButton from '../components/core/HomePage/ScrollButton'

function Home() {
  return (
     <div className='flex flex-col'>
        <div className='mx-auto  flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8' >
         <HeroSection/>
         <ScrollButton/>
         <FeatureSection/>
         <ReviewSection/>
        </div>
        <Footer/>
     </div>
  )
}

export default Home