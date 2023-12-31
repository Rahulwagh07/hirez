import React from 'react'
import HeroSection from '../components/core/HomePage/HeroSection'
import FeatureSection from '../components/core/HomePage/FeatureSection'
import Footer from '../components/common/Footer'
import ScrollButton from '../components/core/HomePage/ScrollButton'
import About from './About'
import Contact from './Contact'

function Home() {
  return (
     <div className='flex flex-col'>
        <div className='mx-auto  flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8' >
         <HeroSection/>
         <ScrollButton/>
         <FeatureSection/>
        </div>
        <About/>
        <Contact/>
        <Footer/>
     </div>
  )
}

export default Home