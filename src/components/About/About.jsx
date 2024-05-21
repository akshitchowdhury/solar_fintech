import React from 'react';
import v1 from "../../assets/about/empowerUsers.png"
import v2 from "../../assets/about/sustainEnergy.png"
import v3 from "../../assets/about/corportaePartners.png"

import m1 from "../../assets/about/inclusiveInvest.png"
import m2 from "../../assets/about/innovativeFinance.jpg"
import m3 from "../../assets/about/sustainableGoals.png"
const About = () => {
  const visionData = [
    {
      title: "Empowering Users",
      description: "Provide microshares to users, making solar energy investment accessible to everyone.",
      imageUrl: v1 // Replace with actual image URLs
    },
    {
      title: "Sustainable Energy",
      description: "Promote sustainable energy solutions by offering affordable solar panel options.",
      imageUrl: v2
    },
    {
      title: "Corporate Partnerships",
      description: "Collaborate with corporates to implement large-scale solar panel installations.",
      imageUrl: v3
    }
  ];

  const missionData = [
    {
      title: "Inclusive Investment",
      description: "Enable fractional investments in solar projects to democratize energy ownership.",
      imageUrl: m1
    },
    {
      title: "Innovative Financing",
      description: "Develop fintech solutions that facilitate easy and transparent solar investments.",
      imageUrl: m2
    },
    {
      title: "Sustainability Goals",
      description: "Support global sustainability goals by reducing carbon footprints through solar energy.",
      imageUrl: m3
    }
  ];

  return (
    <div className="bg-gray-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">About Solar Fintech</h1>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Vision</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden
              hover:scale-105 transition ease-in-out duration-300">
                <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-contain"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden
              hover:scale-105 transition ease-in-out duration-300">
                <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-contain"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
