import React from 'react'
import HoverCounter from "./HoverCounter";
import ClickCounter from "./ClickCounter";
import User from "./User";
import Counter from "./Counter";

function Parent(){
    return(
        // render props refers to a technique for sharing code between react components using a prop value whose is a function
        // a component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic
        // you must not be used props name. you can use children or render
       <div>

           <Counter>
               {(count, incrementCounter) =><ClickCounter count={count} incrementCounter={incrementCounter}/>}
           </Counter>

           <Counter>
               {(count, incrementCounter) => {
               return <HoverCounter count={count} incrementCounter={incrementCounter}></HoverCounter>
           }}
           </Counter>
           {/* render is callback function that returns value where fill from the user component */}
           <User render={(isLoggedIn ) => isLoggedIn ? 'haydar': 'guest' }></User>
       </div>
    )
}

export default Parent
