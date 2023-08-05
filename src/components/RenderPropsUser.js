import React, {Component} from 'react'

class RenderPropsUser extends Component{
    render(){
        const { render } = this.props
        // simple example for render props
        return(
            <h1>{render(false)}</h1>
        )
    }
}

export default RenderPropsUser
