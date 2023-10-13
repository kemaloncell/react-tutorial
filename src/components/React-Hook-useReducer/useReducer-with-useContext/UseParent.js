import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentD from "./ComponentD";

const initialCount = 0; // step 2  create a global state
const reducer = (state, action) => { // step 3 
    switch(action){
      case 'increment': return state + 1
      case 'decrement': return state - 1
      case 'reset': return initialCount
      default: return state
    }
}

export const CounterContext = React.createContext() // step 4 create useContext and export it

function UseParent(){
   // lets make a global state model with useReduce and useContext
   const [count, dispatch]  = useReducer(reducer, initialCount) // step 1 define useReduce
  // step 5 create CounterContex. Provideder and pases the state to the components
        return(
         <CounterContext.Provider value={{CounterCount: count, CounterDispatch: dispatch}}> 
           <div>
            Count: {count}
              <ComponentA/>
              <ComponentB/> 
              <ComponentD/>
           </div>
           </CounterContext.Provider>
        )
}

export default UseParent
