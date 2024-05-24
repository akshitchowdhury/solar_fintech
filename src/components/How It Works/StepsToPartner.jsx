import { useState } from 'react';

import i1 from '../../assets/contactLeft.jpg';
import i2 from '../../assets/about/approach.png';
import i3 from '../../assets/contactRight.jpg';
import i4 from '../../assets/investmentCycle.png';
import i5 from '../../assets/webDesign.webp';
import i6 from '../../assets/investmentCycle.png';

const steps = [
  { step: "Contact us for a consultation.", imgSrc: i1 },
  { step: "Get a customized solar plan and quote.", imgSrc: i2 },
  { step: "Approve the plan and schedule installation.", imgSrc: i3 },
  { step: "Installation and setup of solar panels.", imgSrc: i4 },
  { step: "Monitor performance and savings through our dashboard.", imgSrc: i5 }
];

const AccordionCard = ({ step, imgSrc, isOpen, onClick }) => (
  <div 
    className={`bg-white rounded-lg shadow-md 
    overflow-hidden transition-all ease-in-out duration-300 ${isOpen ? 'max-w-full' : 'max-w-xs'}`}
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  >
    <div className="flex flex-col md:flex-row items-center">
    <img 
        src={imgSrc} 
        alt={step} 
        className="object-contain"
        style={{ width: '100px', height: '100px' }}
      />
      {isOpen && (
        <>
        <div className="p-4 flex-1 w-auto md:w-[500px]">
          <h4 className="text-lg font-medium">{step}</h4>
        </div>
        </>
      )}
    </div>
  </div>
);

const StepsToPartner = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="p-4">
      <h3 className="text-2xl font-semibold mb-4">Steps to Partner with Us</h3>
      <div className="flex  md:flex-col md:gap-4 items-center">
      <div className="flex-1 items-center">
          {openIndex !== null && (
            <img 
              src={steps[openIndex].imgSrc} 
              alt={steps[openIndex].step} 
              className="object-contain md:w-1/2 md:h-1/2"
            />
          )}
        </div>
        <div className="flex flex-row gap-20 items-center">
          {steps.map((item, index) => (
            <AccordionCard 
              key={index} 
              step={item.step} 
              imgSrc={item.imgSrc} 
              isOpen={openIndex === index} 
              onClick={() => setOpenIndex(openIndex === index ? null : index)} 
            />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default StepsToPartner;
