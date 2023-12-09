import React from 'react'

const FeatureCard  = ({ logo, title, description  }) => {
   return (
    <div className="bg-[#fff] flex min-h-[330px] max-w-[380px] flex-col   items-center gap-y-4 px-4 py-12 rounded-md border-b-[6px]  shadow-lg z-20 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105">
         <div className='bg-white rounded-full'>
         <img src={logo} alt={title} className="w-16 h-16 mb-4 mx-auto" />
         </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-pure-greys-500 text-base font-semibold text-opacity-80">{description}</p>
  </div>
   );
}

export default FeatureCard