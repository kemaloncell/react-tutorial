import React from 'react';

import HigherOrderHoverComp from "./HoverCounter";
import HigherOrderClickComp from "./ClickCounter";

const Parent = (props) => {
    return(
        // if we want to pass props to the HigherOrderWithCounterComp we can do it like this:
        <div>
            <HigherOrderClickComp name='kemal'/>
            <HigherOrderHoverComp/>
        </div>
    )
}

export default Parent // call from App.js
