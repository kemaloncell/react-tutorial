import React, {Component} from 'react'

export default class ClassClick extends Component {
// if you use class component the function keyword before name of function must not write
    clickHandler(){
        console.log('Class click')
    }

    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Class click</button>
                Class Component
            </div>
        )
    }
}
