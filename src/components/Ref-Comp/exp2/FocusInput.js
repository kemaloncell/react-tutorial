import React, {Component} from 'react'
import Input from './Input'


class FocusInput extends Component{
    constructor(props){
        super(props)
     // refs cannot be attached to functional components, only class components
        this.componentRef = React.createRef() // this is the ref that is passed to Input.js
    }

    clickHandler = () => { // this method called the focusInput method in Input.js
        this.componentRef.current.focusInput()
    }
// !! we used the ref to reach the focus where is in the child component
    render(){
        return(
            <div>
                <Input ref={this.componentRef}/>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default FocusInput
