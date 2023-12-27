import React from 'react';
import FeatureCard from './FeatureCard';
import { cardsData } from '../../../data/CardsData';

function FeatureSection() {
  return (
    <div className='w-10/12 mt-16 flex flex-col items-center gap-4 scroll' id='#feature'>
      <h2 className='text-blue-150 font-bold text-2xl'>WHY Hire-Up?</h2>
      <p className='text-5xl font-bold'>
        Making Hiring Easier and <br/> more convenient for you.
      </p>

      <div className="mx-auto my-12 grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
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
  );
}

export default FeatureSection;
