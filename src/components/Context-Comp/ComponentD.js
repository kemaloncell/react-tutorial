import React, {Component} from 'react';
import ComponentF from "./ComponentF";
import UserContext from "./UserContext";
class ComponentD extends Component {
    // static contextType mean that we are assigning context to the component
    static contextType = UserContext; // second way to assign context to the component (more simple way )
    render() {
        // step 3. use context in the component body. this.context came from 2. step
        return (
            <div>
                <h4> Component D include default props =  {this.context} </h4>
                <ComponentF></ComponentF>
            </div>
        )
    }
}

// first way to use ComponentD.contextType = UserContext; // step 2. assign context to the component
export default ComponentD;
