import React from "react";
import "./Home.css";
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">{/* Background div */}
      
      
      </div>
      <div className="SocialIcons absolute top-[30px] right-[10%] flex flex-row 
      items-end justify-between md:top-[30px] md:right-[10%] gap-7 md:gap-x-40">
      <FaInstagram className="text-white hover:scale-125 transition ease-in-out duration-200"/>
      <FaTwitter className="text-white hover:scale-125 transition ease-in-out duration-200"/>
      <FaFacebook className="text-white hover:scale-125 transition ease-in-out duration-200"/>
      <FaLinkedin className="text-white hover:scale-125 transition ease-in-out duration-200"/>
      </div>
      
      <hr className="w-full absolute top-[60px] right-[0%] md:w-[100rem] my-4 border-opacity-50 border-white" />
      <div className="absolute top-[40%] left-1/2 md:top-1/3 md:left-1/3 transform -translate-x-1/2 -translate-y-1/3 w-full flex flex-col items-center p-5 md:p-20 gap-5">
        <div className="flex flex-col w-full md:w-2/3 text-center">
          {/* <div className="mt-3 text-sm text-sky-500 flex items-center justify-start">
            <hr className="w-1/6 md:w-1/12 border-sky-500" />
            <span className="mx-2 md:mx-4">Innovate Inspire Integrate</span>
            <hr className="w-1/6 md:w-1/12 border-sky-500" />
          </div> */}
          <div className="text-4xl md:text-7xl text-center md:text-left  font-semibold text-white leading-tight md:leading-[79px]">
            Solar Fintech
          </div>
          
          <p className="text-lg my-4 w-full md:w-2/3 text-white font-normal text-center md:text-left">
            Offering microshares to users and offering solar panels to corporates.
          </p>
         
          <div className="buttons flex flex-wrap justify-center md:justify-start gap-6">
    
    <Link to="/contact">
    <button
        type="button"
        className="text-white px-6 py-2 h-14 w-1/5 sm:w-auto lg:w-16 md:w-16
             bg-transparent border-2 border-white focus:ring-4 focus:outline-none
             focus:ring-blue-300 font-medium text-sm dark:bg-blue-600 dark:focus:ring-blue-800
             hover:bg-white hover:text-black hover:transform 
             hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out
             sm:ml-0 lg:ml-2 md:ml-2" // Adjust left margin for small screens
    >
        <FaArrowRight className="-mx-1 md:mx-0"/>
    </button>
    </Link>

    <button
        type="button"
        className="text-black px-6 py-2 h-14 w-full sm:w-auto md:w-48
               bg-white focus:ring-4 focus:outline-none
                focus:ring-blue-300 font-medium text-sm dark:bg-blue-600 dark:focus:ring-blue-800
                 hover:bg-sky-500 hover:text-white hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out
                 sm:mt-4 md:mt-0 lg:mt-0" // Adjust top margin for small screens
    >
        Get a Quote
    </button>

    <button
        type="button"
        className="text-white px-6 py-2 h-14 w-full sm:w-auto md:w-48
               bg-transparent border-2 border-white focus:ring-4 focus:outline-none
                focus:ring-blue-300 font-medium text-sm dark:bg-blue-600 dark:focus:ring-blue-800
                 hover:bg-white hover:text-black hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
    >
        Aiming for an Investment
    </button>
</div>


        </div>
      </div>
    </>
  );
};

export default Home;
