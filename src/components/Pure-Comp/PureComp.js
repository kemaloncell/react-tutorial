import React, { PureComponent } from 'react'


// Pure components are similar to regular components, but they are used for performance optimization.
// Pure components are used when the component does not depend on any state or props changes.
// it just renders the same output for the same state and props values.
// pure components only work with class components
class PureComp extends PureComponent{
    render(){
        console.log('**********PureComp**********')
        return(
            <div>
                Pure Component- {this.props.name}
            </div>
        )
    }
}

export default PureComp
