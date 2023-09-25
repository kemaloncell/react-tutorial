import React, {Component} from 'react'

class Input extends  Component{
    constructor(props){
        super(props)

        this.inputRef = React.createRef()
    }

    focusInput = () => { // this method is called from FocusInput.js with ref
        this.inputRef.current.focus()
    }
// we create attached a ref to the input so that we could be able to use the focus property
    render(){
        return(
            <div>
                <input type='text' ref={this.inputRef}/>
            </div>
        )
    }
}

export default Input
