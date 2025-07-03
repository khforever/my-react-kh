import Counter from "../components/ChildProps";
import { useState } from "react";

export default function ParentProps() {
  const [counter, setCounter] = useState(3);

  return (
    <div>
      <Counter count={counter} setCount={setCounter} />
    </div>
  );
}