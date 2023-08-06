import React from 'react';

import HigherOrderHoverComp from "./HigherOrderHoverComp";
import HigherOrderClickComp from "./HigherOrderClickComp";

const HigherOrderParentComp = (props) => {
    return(
        // if we want to pass props to the HigherOrderWithCounterComp we can do it like this:
        <div>
            <HigherOrderClickComp name='kemal'/>
            <HigherOrderHoverComp/>
        </div>
    )
}

export default HigherOrderParentComp // call from App.js
