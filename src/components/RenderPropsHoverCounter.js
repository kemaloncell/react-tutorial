import React, { Component } from "react";

class RenderPropsHoverCounter extends Component {


    render(){
        const { count, incrementCounter } = this.props
        return <div onMouseOver={incrementCounter}>Hovered { count } times </div>
    }
}

export default RenderPropsHoverCounter
