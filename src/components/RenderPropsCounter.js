import React, {Component} from 'react'

class RenderPropsCounter extends Component{
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
     //  const { render } = this.props you dont need this line because you are not destructuring the props

        return(
            <div>{this.props.children(this.state.count, this.incrementCounter)}</div>
        )
    }
}

export default RenderPropsCounter
