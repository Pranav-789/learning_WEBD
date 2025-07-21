import React, { useState } from "react";

const PantryTracker = () => {
  const [tomatoes, setTomatoes] = useState(5);

  const addTomato = () => {
    setTomatoes((prev)=> prev+1);
  };

  const useTomato = () => {
    if(tomatoes == 0 || tomatoes < 0){
      return;
    }
    else{
      setTomatoes((prev)=> prev-1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-red-100 rounded-lg">
      <h1 className="text-xl font-bold">🍅 Tomato Stock: {tomatoes}</h1>
      <div className="flex gap-4">
        <button
          onClick={addTomato}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Tomato
        </button>
        <button
          onClick={useTomato}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Use Tomato
        </button>
      </div>
    </div>
  );
};

export default PantryTracker;
