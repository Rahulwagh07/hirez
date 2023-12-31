import React from 'react'
import { ContactUsForm } from '../components/core/HomePage/ContactUsForm'
 function Contact()   {
  return (
    <div className='flex mx-auto h-auto mt-16 w-10/12 items-center justify-center'> 
      <div className='flex flex-col items-center justify-center'>
      <h2 id="#contact" className='text-4xl font-bold flex mx-auto mb-1 tracking-wide title-color'>Contact Us</h2>
      <p className='font-normal items-center text-color justify-center flex mx-auto'>Send us a message!</p>
      <ContactUsForm />
      </div>
    </div>
  )
}
export default Contact
