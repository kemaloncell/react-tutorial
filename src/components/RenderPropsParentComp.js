import React from 'react'
import RenderPropsHoverCounter from "./RenderPropsHoverCounter";
import RenderPropsClickCounter from "./RenderPropsClickCounter";
import RenderPropsUser from "./RenderPropsUser";
import RenderPropsCounter from "./RenderPropsCounter";

function RenderPropsParentComp(){
    return(
        // render props refers to a technique for sharing code between react components using a prop value whose is a function
        // a component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic
        // you must not be used props name. you can use children or render
       <div>

           <RenderPropsCounter>
               {(count, incrementCounter) =><RenderPropsClickCounter count={count} incrementCounter={incrementCounter}/>}
           </RenderPropsCounter>

           <RenderPropsCounter>
               {(count, incrementCounter) => {
               return <RenderPropsHoverCounter count={count} incrementCounter={incrementCounter}></RenderPropsHoverCounter>
           }}
           </RenderPropsCounter>

           {/* <RenderPropsHoverCounter></RenderPropsHoverCounter>
           <RenderPropsClickCounter></RenderPropsClickCounter>
           <RenderPropsUser render={(isLoggedIn ) => isLoggedIn ? 'haydar': 'guest' }></RenderPropsUser> */ }
       </div>
    )
}

export default RenderPropsParentComp
