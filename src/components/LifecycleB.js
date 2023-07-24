import React, {Component} from 'react'

class LifecycleB extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'kemal',
        }
        console.log('constructor LifecycleB ')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps LifecycleB ')
        return null
    }
    componentDidMount(){
        console.log('componentDidMount LifecycleB ')
    }
    render(){
        console.log('render LifecycleB ')
        return(
            <div>
                <div>LifecycleB</div>
            </div>
        )

    }
}

export default LifecycleB
