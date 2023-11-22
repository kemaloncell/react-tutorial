import React from "react";
import FetchDataTwo from "./FetchDataTwo";

// if you work with number, string, array you can use the useState
// if you work with array or object you can use the useReducer because it faster works than useState
function FetchParent(){
        return(
           <div>
              <FetchDataTwo/>
           </div>
        )
}

export default FetchParent
