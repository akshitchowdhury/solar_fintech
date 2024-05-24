import React from 'react';
import Industry from './Industry/Industry';

import i1 from '../../assets/contactLeft.jpg'
import i2 from '../../assets/about/approach.png'
import i3 from '../../assets/contactRight.jpg'
import i4 from '../../assets/investmentCycle.png'
import i5 from '../../assets/webDesign.webp'
import i6 from '../../assets/investmentCycle.png'
import invetmentCycle from '../../assets/investmentCycle.png'
import PopularDetinationCarousel from './PopularDestinations/PopularDetinationCarousel';
import StepsToPartner from './StepsToPartner';
const HowItWorks = () => {
    const testimonials = [
        {
          text: "\"Installing solar panels helped us significantly reduce our electricity costs and carbon footprint. Our corporate sustainability initiatives have been enhanced as a result. Highly recommended for any business looking to make a positive environmental impact.\"",
          image: i1
        },
        {
          text: "\"Switching to solar energy reduces not only the utility bills but also aligns with our green goals. The potential tax incentives and rebates made it a financially smart decision as well. We are proud to contribute to a greener future.\"",
          image: i2
        },
        {
          text: "\"Since installing solar panels, our electricity expenses have dropped significantly. The investment also boosted our property value and strengthened our commitment to sustainability. We're thrilled with the results and the positive impact on our environmental footprint.\"",
          image: i3
        },
        {
          text: "\"Our company's decision to go solar has paid off immensely. We've noticed substantial savings on energy costs and have taken advantage of several tax incentives. The increase in property value is an added bonus. Solar energy is a win-win for our business and the environment.\"",
          image: i4
        },
        {
          text: "\"Adopting solar power was a game-changer for our organization. We now enjoy lower electricity bills and have improved our corporate sustainability profile. The tax rebates and potential property value increase made the switch even more beneficial.\"",
          image: i5
        },
        {
          text: "\"Investing in solar panels has been a great decision for reducing our operating costs and environmental impact. Our sustainability initiatives have received a major boost, and we are seeing the financial benefits through tax incentives and increased property value.\"",
          image: i6
        }
      ]
      
  return (
    <div className="container mx-auto p-6">
      {/* Section for Investors */}
      <section className="my-12">
        
        <div className="flex flex-col lg:flex-col items-end">

          <Industry/>
          {/* Investment process */}
          <div className=' flex flex-col md:flex-row items-center'>
          <img src={invetmentCycle} alt="Investment Process Diagram" className="w-1/2 max-w-xl
          h-1/2"/>

          <div className="lg:w-1/2 p-4">
          
            <h3 className="text-2xl font-semibold mb-4">Investment Process</h3>
            <p className="mb-4">Our platform allows you to invest in solar projects easily and securely. You can expect potential returns based on the performance of the projects you invest in. However, as with any investment, there are risks involved, including the potential for loss of principal.</p>
            <p>Investments are diversified across multiple projects to minimize risk and maximize potential returns.</p>
          
          </div>
          </div>
        </div>

      </section>

      {/* Section for Corporates */}
      <section className="my-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works for Corporates</h2>
        <div className="flex flex-col lg:flex-col md:items-start items-center">
          
          <PopularDetinationCarousel testimonials={testimonials}/>
          {/* Installation process */}
          <StepsToPartner/>
        </div>
        {/* Visual aids */}
        <div className="mt-8 flex justify-center">
          <img src="/images/corporate-process-flowchart.png" alt="Corporate Process Flowchart" className="w-full max-w-xl"/>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
