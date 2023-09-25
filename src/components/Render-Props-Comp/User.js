import React, {Component} from 'react'

class User extends Component{
    render(){
  // 'render' is just a name it can be changed for example we can use cumali instead of render
        const { render } = this.props
        // simple example for render props
        return(
            <h1>{render(false)}</h1>
        )
    }
}

export default User
