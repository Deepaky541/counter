import { useState } from "react";

import './Counter.css'
export const Counter = (prop) => {
const [count,setCount]=useState(prop.value)


  return (
    <div>
      <h2 className={ count%2===0 ? "green" : "red" } >count is:{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          setCount(count*2);
        }}
      >
        double
      </button>
    </div>
  );
}
