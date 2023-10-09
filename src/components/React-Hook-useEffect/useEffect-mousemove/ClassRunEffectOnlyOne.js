import React, {Component} from "react";

class ClassRunEffectOnlyOne extends Component{
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }

     logMousePosition = (e) => {
        console.log('logMousePosition')
        this.setState({
             x : e.clientX,
             y : e.clientY
        })

     }
    componentDidMount() {
        console.log('updated')
        window.addEventListener('mousemove', this.logMousePosition)
    }

    // it's name cleanup function
    // it prevent to re-render code when the component does not invoke from, via: ParentMouse
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.logMousePosition)
    }

    render(){
        return(
            <div>
             x: {this.state.x} - y: {this.state.y}
            </div>
        )
    }
}

export default ClassRunEffectOnlyOne
