import React, { Component, PureComponent } from 'react'
import PureReqComp from "./PureReqComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

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
        console.log('**********PureParentReqComp**********')
        return(
            <div>
                <MemoComp name={this.state.name}/>
                {/* <PureReqComp name={this.state.name}></PureReqComp>
               <PureComp name={this.state.name}></PureComp>*/}
            </div>
        )
    }
}

export default PureParentReqComp
