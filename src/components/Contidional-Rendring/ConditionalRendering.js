import React, { Component} from "react";

class ConditionalRendering extends Component {

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        /* approach 1 - if else statment doesn't work in jsx
        if(this.state.isLoggedIn){
            return <div>
                <h1>Welcome Cumali</h1>
            </div>
        }else{
            return <div>
                <h1>Welcome Guest</h1>
            </div>
        } */

        /* approach 2 - element variables
        let element
        if(this.state.isLoggedIn){
            this.message = <div>Welcome Cumali</div>
        }else {
            this.message = <div>Welcome Guest</div>
        }
        return <div>{this.message}</div>*/

        /* approach 3 - ternary conditional operator
        return(
            this.state.isLoggedIn ? <div>Welcome Cumali</div> : <div>Welcome Guest</div>
        )
      */

        /* approach 4 - short circuit operator */
        return this.state.isLoggedIn && <div>Welcome Cumali</div>
    }
}
export default ConditionalRendering
