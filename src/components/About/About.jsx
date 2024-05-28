import React from "react";
import v1 from "../../assets/about/empowerUsers.png";
import v2 from "../../assets/about/sustainEnergy.png";
import v3 from "../../assets/about/corportaePartners.png";

import m1 from "../../assets/about/inclusiveInvest.png";
import m2 from "../../assets/about/innovativeFinance.jpg";
import m3 from "../../assets/about/sustainableGoals.png";
import approach from "../../assets/about/approach.png";
import CountRise from "./CountRise/CountRise";
import './About.css'
const About = () => {
  const visionData = [
    {
      title: "Empowering Users",
      description:
        "Provide microshares to users, making solar energy investment accessible to everyone.",
      imageUrl: v1, // Replace with actual image URLs
    },
    {
      title: "Sustainable Energy",
      description:
        "Promote sustainable energy solutions by offering affordable solar panel options.",
      imageUrl: v2,
    },
    {
      title: "Corporate Partnerships",
      description:
        "Collaborate with corporates to implement large-scale solar panel installations.",
      imageUrl: v3,
    },
  ];

  const missionData = [
    {
      title: "Inclusive Investment",
      description:
        "Enable fractional investments in solar projects to democratize energy ownership.",
      imageUrl: m1,
    },
    {
      title: "Innovative Financing",
      description:
        "Develop fintech solutions that facilitate easy and transparent solar investments.",
      imageUrl: m2,
    },
    {
      title: "Sustainability Goals",
      description:
        "Support global sustainability goals by reducing carbon footprints through solar energy.",
      imageUrl: m3,
    },
  ];

  return (
    <>
      <section className="about-section bg-cover bg-center">
        <div className="container mx-auto px-4 py-20 md:py-40">
          <div className="flex flex-col my-[100px] items-start justify-start gap-4 text-start">
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              About US 
            </h1>
            <p className="text-xl font-semibold text-gray-300 md:text-2xl">
            Empowering lived to revolutionize solar energy sector with innovative solutions.
            </p>
          </div>
        </div>
      </section>
    
    <div className="bg-gray-100 p-6 md:p-28 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mx-6 md:mx-20 ">
          <div className="flex w-full md:w-3/4">
            <img
              loading="lazy"
              src={approach}
              className="w-full h-auto "
              alt="App Development"
            />
          </div>

          <div className="flex flex-col  w-full md:w-full ">
            <div className="text-justify mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Our Approach</h1>
              <p className="mt-4 text-gray-600">
                We believe that successful applications are built on a
                foundation of strategic planning, creative design, and flawless
                execution. Our process begins with a deep dive into your
                business objectives, target audience, and industry landscape.
                From there, we work collaboratively with you to conceptualize,
                design, develop, and launch a tailored solution that meets your
                specific needs and exceeds your expectations.
              </p>
            </div>
          </div>
        </div>

        <CountRise />

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Our Vision
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden
              hover:scale-105 transition ease-in-out duration-300"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden
              hover:scale-105 transition ease-in-out duration-300"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-contain"
                />
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
    </>
  );
};

export default About;
