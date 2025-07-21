import React, { useState } from "react";
import CustomerReview from "./Customer_Review"; // ✅ Importing the correct component

const CustomerForm = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  return (
    <div className="bg-blue-800 text-white p-4 rounded-lg flex flex-col gap-2 w-[300px] mx-auto mt-6">
      <label htmlFor="Name">Customer Name:</label>
      <input
        type="text"
        name="Name"
        onChange={(e) => setName(e.target.value)}
        className="p-1 text-black rounded"
      />

      <label htmlFor="Review">Review:</label>
      <input
        type="text"
        name="Review"
        onChange={(e) => setReview(e.target.value)}
        className="p-1 text-black rounded"
      />

      <label htmlFor="Rating">Rating (out of 5):</label>
      <input
        type="number"
        name="Rating"
        onChange={(e) => setRating(e.target.value)}
        className="p-1 text-black rounded"
      />

      <div className="mt-4">
        <CustomerReview
          customerName={name}
          reviewText={review}
          rating={rating}
        />
      </div>
    </div>
  );
};

export default CustomerForm;
