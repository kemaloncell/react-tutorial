import React, {Component} from 'react'

class RefsDemo extends Component {
    constructor(props){
        super(props)

        this.inputRefs = React.createRef() // 1. first approach
        this.cbRefs = null // 2. second approach, the callback parameter equal to input element
        this.setCbRefs = (element) => {
            this.cbRefs = element // the cbRefs will be equal to input element
        }

    }


    componentDidMount(){
       // this.inputRefs.current.focus() first approach
        if(this.cbRefs){
            this.cbRefs.focus() // we dont need to use current property because the cbRefs is equal to input element
        }
        console.log(this.inputRefs)
    }

    clickHandler = () =>{
        alert(this.inputRefs.current.value)
    }

    render(){
        return(
            <div>
                <input type='text' ref={this.inputRefs} />
                <input type='text' ref={this.setCbRefs} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
