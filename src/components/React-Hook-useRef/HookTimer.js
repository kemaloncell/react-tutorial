import React, {useEffect, useState, useRef} from "react";

// our problem is we can not call the 'interval' because it defines inside the useEffect scope that's why we have to use useRef()
function HookTimer(){
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(null) // step 1 create ref

    useEffect(() => {
        intervalRef.current = setInterval(() => {  // step 2 set setInterval to the interval.current
            setTimer(prevState => prevState + 1)
        },1000)

        return() => {  // step 3 clear interval with return which is useEffect second parameters it also same work with the componentWilUnmount
            clearInterval(intervalRef.current)
        }

    },[])

// step 4 reach the clear the interval with intervalRef.current parameters
    return(
      <>
          <p>{timer}</p>
          <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
      </>
    )
}

export default HookTimer
