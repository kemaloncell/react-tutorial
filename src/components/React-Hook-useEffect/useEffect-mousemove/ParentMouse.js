import React, {useState} from 'react'
import ClassRunEffectOnlyOne from "./ClassRunEffectOnlyOne";
import RunEffectOnlyOne from "./RunEffectOnlyOne";

function ParentMouse(){
    const [display, setDisplay] = useState(true)

    // it's name cleanup function
    // when we hide the component, the logs where is useEffect method in that component still writes so we have to fix it follow the child component and check the useEffect method
    return(
        <div>
            <button onClick={() => setDisplay(!display)}>hide comp.</button>
            {display && <RunEffectOnlyOne/>}
        </div>
    )
}

export default ParentMouse
