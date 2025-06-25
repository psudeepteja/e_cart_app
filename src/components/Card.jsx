import React from 'react';
import { useSelector } from 'react-redux';
import { SkeletonCard } from '../utils/Skeleton/SkeletonCard';

const Card = ({ title, image }) => {
  const { isLoading } = useSelector(state => state.categories)
  
  
  return (
    isLoading === "pending" ? (
      <SkeletonCard />
    ) : (
      <div className=" overflow-hidden rounded-xl bg-gray-100  cursor-pointer flex flex-col items-center justify-center">
        <img className="w-20 h-20 bg-gray-100 pt-4" src={image} alt={title} />
        <div className="py-4">
          <div className="font-bold mb-2 text-xs truncate w-[100px]">{title.toUpperCase()}</div>
        </div>
      </div>

    )
  );
};

export default Card;
