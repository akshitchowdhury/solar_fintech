import React, { useState } from "react";
import indus1 from "../../../assets/webDesign.webp";
import data from "./data";
import { Link } from "react-router-dom";

const Industry = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleAccordionToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-16 px-4 my-14">
      <h2 className="text-4xl font-semibold text-start mb-8">
        How It Works for Investors
      </h2>
      <hr className="text-black w-[70%] my-7" />

      {/* Large and Medium Screens Layout */}
      <div className="hidden lg:flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/3">
          <ul className="text-lg md:text-xl text-zinc-900 space-y-4">
            {data.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer transition 
                ease-in-out duration-200 hover:scale-105 bg-white 
                bg-opacity-10 backdrop-filter backdrop-blur-lg border  hover:border-orange-700 
                hover:border-opacity-20 rounded-md p-2"
                onMouseEnter={() => handleMouseEnter(index)}
                // onMouseLeave={handleMouseLeave}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            {hoveredItem !== null
              ? data[hoveredItem].title
              : "Industry Solutions"}
          </h2>
          <p className="text-base md:text-lg text-white mb-6">
            {hoveredItem !== null
              ? data[hoveredItem].desc
              : "Hover over an industry to see more information."}
          </p>
          <Link to="/contact">
            <button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300">
              Learn More
            </button>
          </Link>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src={hoveredItem !== null ? data[hoveredItem].image : indus1}
            alt="Industry"
            className="w-full h-auto max-w-sm rounded-md shadow-md"
          />
        </div>
      </div>

      {/* Small Screens Accordion */}
      <div className="lg:hidden">
        {data.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left text-lg md:text-xl text-white font-semibold
               bg-gray-800 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              onClick={() => handleAccordionToggle(index)}
            >
              {item.title}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-700 rounded-md">
                  <h2 className="text-2xl font-bold text-orange-500 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-white mb-4">{item.desc}</p>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto rounded-md shadow-md mb-4"
                  />
                  <Link to="/contact">
                    <button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300">
                      Learn More
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industry;
