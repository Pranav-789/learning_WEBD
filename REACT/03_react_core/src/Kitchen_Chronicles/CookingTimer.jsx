import React, { useState, useEffect } from "react";

const CookingTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [safe, setSafe] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
        setSeconds((prev) => prev+1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    if (seconds > 10) {
      setSafe(false);
    }
  }, [seconds]);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-orange-100 rounded-lg">
      <h1 className="text-xl font-bold">⏲️ Pasta Cooking Timer</h1>
      <p className="text-lg">
        Time Elapsed: <span className="font-semibold">{seconds}s</span>
      </p>
      {safe && <p>✅ All good. Keep cooking!</p>}
      {!safe && <p>🔥 Warning! Pasta might burn!!</p>}
    </div>
  );
};

export default CookingTimer;
