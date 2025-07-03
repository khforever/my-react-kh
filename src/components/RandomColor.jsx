import React, { useState } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('#ffffff');

  const generateRandomColor = () => {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return `#${hex.padStart(6, '0')}`;
  };

  const handleColorChange = () => {
    setColor(generateRandomColor());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div
        className="w-64 h-64 rounded-lg shadow-lg mb-4"
        style={{ backgroundColor: color }}
      ></div>
      <button
        onClick={handleColorChange}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Change Color
      </button>
      <p className="mt-2 text-lg font-semibold">Current Color: {color}</p>
    </div>
  );
}

export default RandomColor;