import { useState } from 'react';

export default function Counter() {
 
  const [counter, setCounter] = useState(1);

  function add() {
    setCounter(counter + 1);
  }



  function minus() { 
    
    setCounter(counter - 1);
  }
  return (
    <div className="p-5">
      <h1>Counter: {counter}</h1>
      <button onClick={() => add()} className="btn bg-success mx-3">+</button>
      <button onClick={() => minus()}  className="btn bg-danger">-</button>
   
    </div>
  );
}