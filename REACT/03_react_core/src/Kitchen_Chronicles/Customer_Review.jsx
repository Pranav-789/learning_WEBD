import React from "react";

const CustomerReview = ({ customerName, reviewText, rating }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md w-[300px]">
      <h2 className="text-xl text-gray-600 font-bold">{customerName}</h2>
      <p className="italic text-gray-600 mt-1 mb-2">"{reviewText}"</p>
      <p className="font-medium text-gray-600">⭐ Rating: {rating}/5</p>
    </div>
  );
};

export default CustomerReview;
