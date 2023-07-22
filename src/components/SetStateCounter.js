import  React,{Component} from "react";

class SetStateCounter extends Component {
    constructor(props){
        super(props)

            this.state= {
                count: 0
        }
    }

     increment(){
        // the setState method is asynchronous and second parameter is a callback function that will be executed after the state has been updated
      /* this.setState({
           count: this.state.count + 1
       }, () => { console.log('Callback value', this.state.count) })*/
    // if you want to increment the state value 5 times, you have to use the callback function as a parameter of the setState method
     this.setState((prevState) => ({
         count: prevState.count + 1
     }),() => { console.log('Callback value', this.state.count) })

    }

    IncrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return(
            <div>
                  <div>Count : {this.state.count}</div>
                <button onClick={()=> this.IncrementFive()}>Increment</button>
            </div>
        )
    }

}

export default SetStateCounter
