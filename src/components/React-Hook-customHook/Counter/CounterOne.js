import React from "react";
import CounterLogic from "./CounterLogic";

function CounterOne(){
    const [count, increment, decrement, reset] = CounterLogic(1,2)

     return(
         <div>
             <p>Count {count}</p>
             <button onClick={() => increment()}>Increment</button>
             <button onClick={() => decrement()}>Decrement</button>
             <button onClick={() => reset()}>Reset</button>
         </div>
     )

}

export default CounterOne
