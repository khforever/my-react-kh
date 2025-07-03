import { useState } from 'react';

export default function IfCondition() {
  const [isSub] = useState(1);

//   console.log(isSub);

  return (
    <div className="p-5">
      <h1>{!isSub ? "yes" : "no"}</h1>
    </div>
  );
}