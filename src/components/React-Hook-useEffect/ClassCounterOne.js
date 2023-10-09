import React, { Component } from "react";

class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = 'click' + this.state.count
    }

    componentDidUpdate(prevProps, prevState){
        // when the input changes which is the element below, the state re-render. we have to prevent it
        if(prevState.count !== this.state.count){
            // now it renders according to the count value
            console.log('updated')
            document.title = 'click' + this.state.count
        }
    }

    render(){
        return(
            <div>
            <input type='text' value={this.state.value} onChange={e => this.setState({name:e.target.value})}/>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>{this.state.count } times</button>
            </div>
        )
    }
}

export default ClassCounterOne

