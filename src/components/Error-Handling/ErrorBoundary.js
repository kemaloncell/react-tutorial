import React, {Component} from 'react'

class ErrorBoundary extends Component{
    constructor(props){
        super(props)

        this.state = {
            hasError:false
        }
    }

    static getDerivedStateFromProps(error){ //  this method is used to update the state based on the props
        return{
            hasError: true // if the heroName is joker then hasError will be true
        }
    }

    componentDidCatch(error,info){ // this method is used to log the error information
        console.log(error)
        console.log(info)
    }

    render(){
        // props.children is used to render the child components of the ErrorBoundary component
      if(this.state.hasError){
          return <h1>Something went wrong</h1>
      }
    return  this.props.children
    }
}

export default ErrorBoundary
