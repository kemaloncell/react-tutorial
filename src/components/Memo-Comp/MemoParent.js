import React, { Component } from 'react'
import MemoComp from "../Memo-Comp/MemoComp";

class PureParentReqComp extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Kemal'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Kemal'
            })
        }, 200)
    }

    render(){
        return(
            <div>
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default PureParentReqComp
