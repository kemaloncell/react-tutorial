import React, {useState} from "react";

function Parent(){
    const [count, setCount] = useState(0)

    console.log('UseState Rendered')
    // when the second button click it won't re-render because there is no change
    return(
        <div>
         <button onClick={() => setCount((c) => c + 1 )}> Count: {count}</button>
         <button onClick={() => setCount(0)}> Count 2: {count}</button>
        </div>
    )
}

export default Parent

