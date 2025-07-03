import { useState } from "react";

export default function Counter() {
  const [colors, setColors] = useState(["red", "blue", "black", "white"]);

  const add = () => {
    const newcolors = [...colors];
    newcolors.push("yellow");
    setColors(newcolors);
  };

  return (
    <div className="p-5">
      {colors.map((color, index) => (
        <div key={index}>
          <p key={index}>{color}</p>
        </div>
      ))}
      <button onClick={add}>add color</button>
    </div>
  );
}