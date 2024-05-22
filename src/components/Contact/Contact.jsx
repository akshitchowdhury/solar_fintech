import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 p-6 md:p-14">
      <div className="left w-full md:w-[600px] md:h-[570px] p-10 rounded-md bg-purple-700 bg-opacity-50 
      " 
           style={{ backgroundBlendMode: 'multiply', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <p className="px-6 text-lg md:text-3xl text-white font-medium my-[50%] md:my-[60%]">
          We are pleased to keep in touch with you
        </p>
        <p className="px-6 text-sm md:text-base text-white font-thin -my-[40%] md:-my-[58%]">
          Contact us for further details, we are always happy to guide our customers for future investments.
          Contact us for further details, we are always happy to guide our customers for future investments.
        </p>
      </div>
      <div className="right w-full md:flex-1 p-4 space-y-4 ">
        {/* Top div with background image */}
        <div className="rtop w-full h-48 md:h-72 bg-cover bg-center rounded-md
        bg-sky-700 bg-opacity-50 
        "style={{ backgroundBlendMode: 'multiply', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>

        {/* Bottom div as an address card */}
        <div className="w-full p-6 h-48 bg-white shadow-md rounded-md border border-gray-300">
          <h2 className="text-lg font-semibold mb-2">Address</h2>
          <p>123 Main St</p>
          <p>City, State, ZIP</p>
          <p>Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
