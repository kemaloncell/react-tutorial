import React, {Component} from 'react'
import withCounter from "./withCounter";
class ClickCounter extends Component{
    render(){
        const { count, incrementCount, name } = this.props // this is the prop we passed from HigherOrderWithCounterComp.
        return(
            <div>
                <button onClick={incrementCount}>{ name } Clicked { count } times</button>
            </div>

        )
    }
}

export default withCounter(ClickCounter, 10) //call withCounter and pass ClickCounter as a parameter and 10 as a parameter for incrementCount
