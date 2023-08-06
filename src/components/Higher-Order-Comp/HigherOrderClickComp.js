import React, {Component} from 'react'
import withCounter from "./HigherOrderWithCounterComp";
class HigherOrderClickComp extends Component{
  /*  constructor(props){  // we don't need this constructor anymore because we are using the HigherOrderWithCounterComp
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
     this.setState(prevState => {
         return {count: prevState.count + 1}
     }, () => console.log(this.state.count) )
    } */

    render(){
        const { count, incrementCount, name } = this.props // this is the prop we passed from HigherOrderWithCounterComp.
        return(
            <div>
                <button onClick={incrementCount}>{ name } Clicked { count } times</button>
            </div>

        )
    }
}

export default withCounter(HigherOrderClickComp, 10) //call withCounter and pass HigherOrderClickComp as a parameter and 10 as a parameter for incrementCount
