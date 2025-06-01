import { useState } from "react";

export default function BrightnessBar() {
  const [brightness, setBrightness] = useState(50); // 0 to 100

  const handleChange = (e) => {
    setBrightness(e.target.value);
  };

  return (
    <div className="w-80 p-4">
      <label className="text-white mb-2 block">Brightness: {brightness}%</label>
      <div className="w-full h-4 bg-gray-300 rounded overflow-hidden">
        <div
          className="h-full bg-yellow-400 transition-all duration-300"
          style={{ width: `${brightness}%` }}
        ></div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={brightness}
        onChange={handleChange}
        className="w-full mt-2"
      />
    </div>
  );
}
