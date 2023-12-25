import React from 'react'
import Education from './Education'
import Experience from './Experience'
import Certification from './Certification'
import Project from './Project'
import Resume from './Resume'
import ContentSample from "./ContentSample"
import Social from './Social'
 
function Portfolio() {
  return (
    <div className='flex flex-col gap-4'>
      <p>Portfolio</p>
      <Education/> 
      <Experience/>
      <Certification/>
      <Project/>
      <Resume/>
      <ContentSample/>
      <Social/>
      
    </div>
  )
}

export default Portfolio