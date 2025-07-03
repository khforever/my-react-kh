import React, { useState } from 'react';

export default function TaskTwo() 


{


  const [color, setColor] = useState('#ffffff');

  const generateRandomColor = () => {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return `#${hex.padStart(6, '0')}`;
  };

  const handleColorChange = () => {
    setColor(generateRandomColor());
  };

  return (
    <div className="flex flex-col   bg-gray-100">
      <div
        className="w-64 h-64   mb-4"
        style={{ backgroundColor: color }}
      ></div>
      <button
        onClick={handleColorChange}
        className="w-8 h-8 bg-blue-500 center "
      >
        ok
      </button>
      <p className="mt-32 ">Current Color: {color}</p>
    </div>
  );
}