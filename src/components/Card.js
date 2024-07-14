import React from 'react';

const Card = ({ title, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer">
      <img className="w-80 h-60" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default Card;
