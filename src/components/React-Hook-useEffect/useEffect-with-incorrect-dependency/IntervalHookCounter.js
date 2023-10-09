import React, {useEffect, useState} from "react";
import IntervalClassCounter from "./IntervalClassCounter";

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => {
            // it similar to work the componentWillUnmount where inside the IntervalHookCounter
            clearInterval(interval)
        }

    },[])

    // we have to use prevState because when we use count + 1, the page must re-render to we get the last value of count
    // do not forget the count is dependency when it changes the page will be rendered according to the []
    const tick = () => setCount((prevState) => prevState + 1)

    return <h1>{count}</h1>
}

export default IntervalHookCounter
