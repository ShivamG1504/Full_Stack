import React, { useEffect } from "react";
import { UseEffect } from "react";
import { useState } from "react";

const Use_Effect = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("UseEffect is Running");
    document.title=` SideEffect ${counter}`
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <button
        className="btn btn-danger"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
    </div>
  );
};

export default Use_Effect;
