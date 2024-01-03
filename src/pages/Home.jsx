import React from 'react'
import HeroSection from '../components/core/HomePage/HeroSection'
import FeatureSection from '../components/core/HomePage/FeatureSection'
import Footer from '../components/common/Footer'
import ScrollButton from '../components/core/HomePage/ScrollButton'
import About from './About'
import Contact from './Contact'
import CircleAnimation from '../components/core/HomePage/CircleAnimation'

function Home() {
  return (
     <div className='flex flex-col'>
         <HeroSection/>
         <ScrollButton/>
        <FeatureSection/>
        <CircleAnimation/>
        <About/>
        <Contact/>
        <Footer/>
     </div>
  )
}

export default Home