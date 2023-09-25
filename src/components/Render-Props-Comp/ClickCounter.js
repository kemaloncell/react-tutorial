import React, {Component} from 'react'

class ClickCounter extends Component {
    render(){
        const { count, incrementCounter } = this.props
        // when click the incrementCounter it will trigger from the parent comp.
        return <button onClick={ incrementCounter }>Click { count } times</button>

    }
}

export default ClickCounter
