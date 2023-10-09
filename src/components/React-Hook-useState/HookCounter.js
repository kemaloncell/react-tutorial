import React, {useState} from "react";

/*
* only call hooks at the Top level on the React function, don't call hooks inside loops, conditions, or nested functions
 */
function HookCounter(){
    // we can use useState instead of class structure it is simpler
    const [count, setCount] = useState(0)
    return(
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    )
}

export default HookCounter
