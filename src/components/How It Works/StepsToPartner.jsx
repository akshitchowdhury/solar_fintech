import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const StepsToPartner = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full ">
      <h1 className="text-black mx-4 font-bold text-3xl mb-2 md:mb-4">
        Steps to Partner with us
      </h1>
      <div className="flex flex-col md:flex-row flex-1 flex-wrap -mx-2">
        {items.map((item, index) => (
          <div key={index} className="mb-4 md:w-1/3 px-2">
            <button
              className="w-full flex justify-between items-end bg-white border border-gray-300 p-4 rounded-md focus:outline-none transition-colors duration-700 hover:bg-yellow-300"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <FontAwesomeIcon
                icon={faSun}
                className={`h-6 w-6 text-amber-600 transition-transform transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
              <span className="text-sm font-semibold text-start text-fuchsia-700">
                {item.title}
              </span>
            </button>
            <Transition
              show={openIndex === index}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-0"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-0"
            >
              <div className="overflow-hidden transition-all duration-200">
                <div className="p-4 rounded-md">
                  <div
                    className="flex flex-col md:flex-row flex-wrap items-center md:items-start"
                    style={{
                      border: "1pt solid gold",
                      borderRadius: "10px",
                      backgroundColor: "inherit",
                      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                      padding: "5%",
                    }}
                  >
                    <img
                      src={item.image}
                      alt="Play Paw Logo"
                      className="rounded-lg md:w-1/3"
                    />
                    <br />
                    <p
                      className="text-lg mb-4 md:w-auto md:pr-8 text-sky-600"
                      style={{ fontFamily: "cursive", fontSize: "1.5rem" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsToPartner;
