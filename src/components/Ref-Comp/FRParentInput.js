import React, {Component} from 'react'
import FRInput from './FRInput'
class FRParentInput extends Component{
    constructor(props){
        super(props)

        this.parentRef = React.createRef() // 1. Create a ref
    }

    clickHandler = () =>{ // 2. Create a method to focus the input
       this.parentRef.current.focus()
    }
    render(){
        // 3. Pass the ref to the child component
        return(
            <div>
                <FRInput ref={this.parentRef}/>
                <button onClick={this.clickHandler}>Focus ınput</button>
            </div>
        )
    }
}

export default FRParentInput
