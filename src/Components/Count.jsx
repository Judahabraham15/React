import React, { useState } from "react";

const Count = () => {
  const [random, setRandom] = useState(()=>Math.floor(Math.random() *100))
  const generate = () => { 
    const newNum = Math.floor(Math.random() *100 )
    setRandom(newNum)
   }
  return (
    <div>
      {/* <p>{count}</p>
      <button
        onClick={() => {
          onClickHandler();
        }}
      > */}
        {/* Increment
      </button> */}

      <p>{random}</p>
      <button onClick={generate}>Generate new number</button>
    </div>
  );
};

export default Count;
