import React from 'react'
import Education from './Education'
import Experience from './Experience'
import Certification from './Certification'
import Project from './Project'
import Resume from './Resume'
import ContentSample from "./ContentSample"
import Social from './Social'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
 
function Portfolio() {
  const navigate = useNavigate()
  const {user } = useSelector((state) => state.profile)
  const applicantId = user._id
   
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <p>Portfolio</p>
        <p>Preview Your Profile as a <span className='cursor-pointer text-blue-500' onClick={() => navigate(`creator-view/${applicantId}`)}>Creator</span></p>
      </div>
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