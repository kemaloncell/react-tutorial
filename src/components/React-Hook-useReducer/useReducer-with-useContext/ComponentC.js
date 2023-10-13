import React, { useContext } from "react";
import {CounterContext} from './UseParent'
function ComponentC(){
   const counterContext = useContext(CounterContext)
 return(
    <div>
         Component C: {counterContext.CounterCount}  -----
         <button onClick={() => counterContext.CounterDispatch('increment')}> increment </button>
        <button onClick={() => counterContext.CounterDispatch('decrement')}> decrement </button>
        <button onClick={() => counterContext.CounterDispatch('reset')}> reset </button>
    </div>
 )
}

export default ComponentC