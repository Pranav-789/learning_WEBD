import React from 'react'
import { useTheme } from './contexts/ThemeContext';
import Card from './Card';

const Comp = () => {

    const {currentTheme, toggleTheme} = useTheme();
    
  return (
    <div className='w-full min-h-screen'>
      <div
        className={`w-full p-4 text-center text-lg text-white ${
          currentTheme === "dark" ? "bg-red-600" : "bg-green-400"
        }`}
      >
        hello
      </div>
      <div className="w-full mt-6 justify-center flex">
        <button
          className="bg-blue-600 rounded-lg text-white p-2"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>

      <div className="flex justify-center w-full mt-8">
        <Card />
      </div>
    </div>
  );
}

export default Comp
