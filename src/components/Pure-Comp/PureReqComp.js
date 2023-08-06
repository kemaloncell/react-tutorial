import React, { Component } from 'react'

class PureReqComp extends Component{
    render(){
        console.log('**********PureReqComp**********')
        return(
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureReqComp
