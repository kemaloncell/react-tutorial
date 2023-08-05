import React, {Component} from 'react'
import withCounter from "./HigherOrderWithCounterComp";
class HigherOrderHoverComp extends Component {
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
     const { count, incrementCount } = this.props // this is the prop we passed from HigherOrderWithCounterComp.
     // the onMouseHover value is a prop that we passed from HigherOrderWithCounterComp
        return(
            <div>
                <h2 onMouseOver={incrementCount}>Click { count } times</h2>
            </div>
        )
    }
 }

 export default withCounter(HigherOrderHoverComp, 5) //call withCounter and pass HigherOrderHoverComp as a parameter and 5 as a parameter for incrementCount

