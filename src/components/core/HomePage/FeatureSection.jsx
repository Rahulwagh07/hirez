import React from 'react'
import FeatureCard from './FeatureCard'
import { cardsData } from '../../../data/CardsData'
 
function FeatureSection() {
  return (
     <div className='w-10/12  mt-32 flex flex-col items-center gap-4' id='feature'>
        <h2 className='text-blue-150 font-bold text-2xl'>WHY Hire-Studio?</h2>
        <p className='text-5xl font-bold'>
            Making Hiring Easier and <br className="mx-auto" /> more convenient for you.
            </p>

        <div className=" mx-auto my-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
         {
            cardsData.map((card) => (
                <FeatureCard
                    key={card.id}
                    logo={card.logo}
                    title={card.title}
                    description={card.description}/>
            ))
         }

    </div>
     </div>
  )
}

export default FeatureSection