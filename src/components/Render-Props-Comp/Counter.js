import React, {Component} from 'react'

class Counter extends Component{
    constructor(props){
        super(props)

        this.state = {
            count : 0
        }
    }

    incrementCounter= () => {
        this.setState(prevState => {
            return { count: prevState.count +1 }
        })
    }
    // this component is not responsible for rendering anything, it is just responsible for maintaining the state and incrementing the counter
    render(){
     // we used this.props.children to we could be able to crate a dynamic structure

        return(
            <div>{this.props.children(this.state.count, this.incrementCounter)}</div>
        )
    }
}

export default Counter
