import React from 'react';


function FunctionClick() {
    function clickHandler(){
        console.log('function click handler')
    }
/*
      <!--this button clicked once when page is load because of this,() <button onClick={clickHandler()}>Click</button> -->
 */
    return(
        <div>

           <button onClick={clickHandler}>function Click</button>
        </div>
    )
}

export default FunctionClick
