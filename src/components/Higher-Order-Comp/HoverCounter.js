import React, {Component} from 'react'
import withCounter from "./withCounter";

class HoverCounter extends Component {
 render(){
     const { count, incrementCount } = this.props // this is the prop we passed from HigherOrderWithCounterComp.
     // the onMouseHover value is a prop that we passed from HigherOrderWithCounterComp
        return(
            <div>
                <h2 onMouseOver={incrementCount}>Click { count } times</h2>
            </div>
        )
    }
 }

 export default withCounter(HoverCounter, 5) //call withCounter and pass HoverCounter as a parameter and 5 as a parameter for incrementCount

