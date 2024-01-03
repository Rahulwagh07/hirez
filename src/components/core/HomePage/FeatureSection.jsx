import React from 'react';
import FeatureCard from './FeatureCard';
import { cardsData } from '../../../data/CardsData';
import dottedRows from "../../../assets/aboutSection-dottedrows.png"

function FeatureSection() {
  return (
     <div className='w-full flex flex-col items-center justify-center mt-24 p-16 sm:py-12 sm:px-4 shadow-lg bg-bluegrey-50 relative'>
     <img src={dottedRows} className='absolute  top-4 left-2'/>
      <div className='lg:w-10/12 gap-4 flex flex-col items-center' id='#feature'>
      <h2 className='text-blue-150 font-bold text-2xl'>WHY Hire-Up?</h2>
      <p className='text-5xl sm:text-lg font-bold'>
        Making Hiring Easier and <br/> more convenient for you.
      </p>

      <div className="mx-auto my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card) => (
          <FeatureCard
            key={card.id}
            logo={card.logo}
            title={card.title}
            description={card.description}
            borderBottomColor={card.borderBottomColor}
          />
        ))}
      </div>
    </div>
     </div>
  );
}

export default FeatureSection;
