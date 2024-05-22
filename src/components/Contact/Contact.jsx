import React from 'react';
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact flex flex-row space-x-10 p-14">
      <div className="left w-[600px] p-6 rounded-md bg-purple-700 bg-opacity-50 
      hover:scale-105 transition-transform duration-200 " 
     style={{ backgroundBlendMode: 'multiply', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <p className="px-6 text-3xl text-white font-medium my-[60%]">
    We are pleased to keep in touch with you
  </p>
  <p className="px-6 text-sm text-white font-medium -my-[57%]">
    Contact us for further details, we are always happy to guide pur customers for future investments.
    Contact us for further details, we are always happy to guide pur customers for future investments.
  </p>
</div>
      <div className="right flex-1  p-4 space-y-4">
  {/* Top div with background image */}
  <div className="rtop w-full h-72 bg-cover bg-center rounded-md">
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
