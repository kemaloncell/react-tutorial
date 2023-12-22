import React from "react";
import CounterLogic from "./CounterLogic";

function CounterTwo(){

    const [count, increment, decrement, reset] = CounterLogic(10,4)
     return(
         <div>
             <p>Count {count}</p>
             <button onClick={() => increment()}>Increment</button>
             <button onClick={() => decrement()}>Decrement</button>
             <button onClick={() => reset()}>Reset</button>
         </div>
     )

}

export default CounterTwo
