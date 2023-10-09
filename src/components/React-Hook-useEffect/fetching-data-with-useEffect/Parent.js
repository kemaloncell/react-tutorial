import React, {Component} from "react";
import DataFetchingGet from "./DataFetchingGet";
import DataFetchingGetOne from "./DataFetchingGetOne";

class Parent extends Component{
    render(){
        return(
            <DataFetchingGetOne/>
        )
    }
}

export default Parent
