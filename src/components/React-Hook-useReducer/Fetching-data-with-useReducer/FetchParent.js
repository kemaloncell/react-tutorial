import React from "react";
import FetchDataTwo from "./FetchDataTwo";

// if you work with number, string, array you can use the useState
// if you work witch array or object you can use the useReducer
function FetchParent(){
        return(
           <div>
              <FetchDataTwo/>
           </div>
        )
}

export default FetchParent
