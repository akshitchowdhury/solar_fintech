import React from 'react';

const PopularDestinationCard = ({ text, author, Place, image }) => {
  return (
    <div className="max-w-xs w-full md:w-64 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
      <a href="#" className="block">
        <img className="rounded-t-lg w-full h-40 object-cover" src={image} alt={Place} />
      </a>
      <div className="p-3">
        <h5 className="text-md font-medium tracking-tight text-wrap text-gray-900 dark:text-white">{text}</h5>
        
      </div>
    </div>
  );
};

export default PopularDestinationCard;
