import React from "react";
import CounterOne from "./CounterOne";
import CounterThree from "./CounterThree";
import FetchParent from './Fetching-data-with-useReducer/FetchParent'


function Parent(){
        return(
           <div>
              <FetchParent/>
           </div>
        )
}

export default Parent
