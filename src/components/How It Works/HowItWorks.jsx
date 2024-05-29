import React from "react";
import Industry from "./Industry/Industry";

import i1 from "../../assets/contactLeft.jpg";
import i2 from "../../assets/about/approach.png";
import i3 from "../../assets/contactRight.jpg";
import i4 from "../../assets/investmentCycle.png";
import i5 from "../../assets/webDesign.webp";
import i6 from "../../assets/investmentCycle.png";
import "./HowItWorks.css";
import invetmentCycle from "../../assets/investmentCycle.png";
import PopularDetinationCarousel from "./PopularDestinations/PopularDetinationCarousel";
import StepsToPartner from "./StepsToPartner";
import items from "./partnerData";
const HowItWorks = () => {
  const testimonials = [
    {
      text: "Installing solar panels significantly reduces electricity costs and carbon footprint, enhancing our corporate sustainability initiatives.",
      image: i1,
    },
    {
      text: "Switching to solar energy reduces utility bills, aligns with green goals, and offers potential tax incentives and rebates, making it a financially smart decision that supports a greener future.",
      image: i2,
    },
    {
      text: "Installing solar panels significantly reduces electricity expenses, boosts property value, and strengthens commitment to sustainability with a positive environmental impact.",
      image: i3,
    },
    {
      text: "Going solar leads to substantial energy cost savings, tax incentives, and increased property value, making it a win-win for both businesses and the environment.",
      image: i4,
    },
    {
      text: "Adopting solar power reduces electricity bills, improves corporate sustainability, and offers tax rebates and potential property value increases, making it highly beneficial.",
      image: i5,
    },
    {
      text: "Investing in solar panels reduces operating costs and environmental impact, boosts sustainability initiatives, and provides financial benefits through tax incentives and increased property value.",
      image: i6,
    },
  ];

  return (
    <>
      <section className="service-section bg-cover bg-center">
        <div className="container mx-auto px-4 py-20 md:py-40">
          <div className="flex flex-col my-[100px] items-start justify-start gap-4 text-start">
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              Invest in us
            </h1>
            <p className="text-xl font-semibold text-gray-300 md:text-2xl">
              Buy microshares or invest in the cutting edge solar panel technology.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto p-6">
        {/* Section for Investors */}
        <section>
          <div className="flex flex-col lg:flex-col items-end">
            <Industry />
            {/* Investment process */}
            <div className=" flex flex-col md:flex-row items-center">
              <img
                src={invetmentCycle}
                alt="Investment Process Diagram"
                className="w-1/2 max-w-xl
          h-1/2"
              />

              <div className="lg:w-1/2 p-4">
                <h3 className="text-2xl font-semibold mb-4">
                  Investment Process
                </h3>
                <p className="mb-4">
                  Our platform allows you to invest in solar projects easily and
                  securely. You can expect potential returns based on the
                  performance of the projects you invest in. However, as with
                  any investment, there are risks involved, including the
                  potential for loss of principal.
                </p>
                <p>
                  Investments are diversified across multiple projects to
                  minimize risk and maximize potential returns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section for Corporates */}

        <div className="secondndHalf bg-zinc-800 bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            How It Works for Corporates
          </h2>
          <div className="flex flex-col lg:flex-col md:items-start items-center">
            <PopularDetinationCarousel testimonials={testimonials} />
            {/* Installation process */}
            
            </div>
            </div>
            <StepsToPartner items={items} />
          
          {/* Visual aids */}
          {/* <div className="mt-8 flex justify-center">
            <img
              src="/images/corporate-process-flowchart.png"
              alt="Corporate Process Flowchart"
              className="w-full max-w-xl"
            />
          </div> */}
        
      </div>
    </>
  );
};

export default HowItWorks;
