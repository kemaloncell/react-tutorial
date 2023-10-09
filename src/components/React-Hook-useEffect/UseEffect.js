import React, {Component, useEffect, useState} from "react";

function UseEffect(){
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    // useEffect is called after every single render
// we can use useEffect instead of componentDidMount and componentDidUpdate methods where are in the ClassCounterOne.js
    // it's simpler, and it also sets the initial value of the count

    useEffect(() => {
        console.log('updated')
        document.title = 'click' + count + 'times'
        // [count] we wrote it because it prevented that input re-render other exp via ClassCounter.js
    }, [count])
    return(
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => setCount(count  + 1)}>{count}</button>
        </div>
            )

}
export default UseEffect
