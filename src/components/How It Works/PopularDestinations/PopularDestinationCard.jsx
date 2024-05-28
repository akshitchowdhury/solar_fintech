import React from 'react';

const PopularDestinationCard = ({ text, author, Place, image }) => {
  return (
    <div className="max-w-xs w-full md:w-64 rounded-lg shadow-lg bg-white
     bg-opacity-10 backdrop-filter backdrop-blur-sm border border-white border-opacity-20 m-2">
  <a href="#" className="block">
    <img className="rounded-t-lg w-full h-40 object-cover" src={image} alt={Place} />
  </a>
  <div className="p-3">
    <h5 className="text-md font-medium tracking-tight text-wrap text-white dark:text-white">{text}</h5>
  </div>
</div>

  );
};

export default PopularDestinationCard;
