import React, { useState } from "react";

const OrderSheet = () => {
  const [order, setOrder] = useState("");

  const handleChange = (e) => {
    setOrder(e.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-yellow-100 rounded-lg">
      <h1 className="text-xl font-bold">🧾 Take Customer Order</h1>
      <input
        type="text"
        placeholder="Enter dish name..."
        onChange={handleChange}
        className="border border-gray-400 px-4 py-2 rounded"
      />
      <p className="text-lg">
        📝 Current Order: <span className="font-semibold">{order}</span>
      </p>
    </div>
  );
};

export default OrderSheet;
