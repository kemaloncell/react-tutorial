import React, {Component} from "react";
import HookCounter2 from "./HookCounter2";
import HookCounter from "./HookCounter";
import HookCounter3 from "./HookCounter3";

class Parent extends Component{
    render(){
        return(
            <HookCounter3/>
        )
    }
}

export default Parent
