import React, {Component} from "react";
import ClassCounterOne from "./ClassCounterOne";
import UseEffect from "./UseEffect";
import ClassRunEffectOnlyOne from "./useEffect-mousemove/ClassRunEffectOnlyOne";
import RunEffectOnlyOne from "./useEffect-mousemove/RunEffectOnlyOne";
import ParentMouse from "./useEffect-mousemove/ParentMouse";
import IntervalClassCounter from "./useEffect-with-incorrect-dependency/IntervalClassCounter";
import IntervalHookCounter from "./useEffect-with-incorrect-dependency/IntervalHookCounter";
import DataFetchingParent from "./fetching-data-with-useEffect/Parent";


class Parent extends Component{
    render(){
        return(
            <DataFetchingParent/>
        )
    }
}

export default Parent
