import React, { useState } from "react";

const KitchenChaos = () => {
  const [dish, setDish] = useState("");

  const servePizza = () => {
    setDish("Pizza");
  };

  const servePasta = () => {
    setDish("Pasta  ");
  };

  return (
    <div className="p-6 bg-yellow-100 rounded-md flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">🍽️ Kitchen Chaos</h1>
      <div className="flex gap-4">
        <button
          className="bg-red-400 px-4 py-2 rounded text-white"
          onClick={servePizza}
        >
          Serve Pizza
        </button>
        <button
          className="bg-green-500 px-4 py-2 rounded text-white"
          onClick={servePasta}
        >
          Serve Pasta
        </button>
      </div>
      {dish && <p className="text-xl mt-4">✅ {dish} served!</p>}
    </div>
  );
};

export default KitchenChaos;
