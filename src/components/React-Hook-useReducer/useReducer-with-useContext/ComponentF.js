import React, { useContext } from "react";
import {CounterContext} from './UseParent'

function ComponentF(){
   const counterContext = useContext(CounterContext) // call the useContenxt and give it a paramerters where is we defined the parent component 
 return(
    <div>
         Coponent F: {counterContext.CounterCount}  -----**********
         <button onClick={() => counterContext.CounterDispatch('increment')}> increment </button>
        <button onClick={() => counterContext.CounterDispatch('decrement')}> decrement </button>
        <button onClick={() => counterContext.CounterDispatch('reset')}> reset </button>
   
    </div>
 )
}

export default ComponentF