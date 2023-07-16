import React, { Component} from "react";

 class State extends Component {
     constructor() {
         super()
         this.state = {
            message: 'State component'
         }
     }

     changeName() {
         this.setState({
             message: 'the message has been changed'
         })

     }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeName()}>Action</button>
            </div>
        )
    }
}


export default State
