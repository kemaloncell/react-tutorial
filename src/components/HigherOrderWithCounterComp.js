import React, {Component} from "react";


// this component help us to avoid repeating code

const withCounter = ( WrappedComponent, incrementCount ) => { // first we create a new component that takes the original component as a parameter and the incrementCount as a parameter
    class WithCounter extends Component { // second we create a new component that extends the original component
          constructor(props){
              super(props)

                this.state = {
                    count: 0
                }
          }

        incrementCount2 = () => {
            this.setState(prevState => {
                return {count: prevState.count + incrementCount}
            } )
        }


        render(){ // incrementCount is a prop that we will pass to the original component
            return <WrappedComponent
                count={this.state.count}
                incrementCount={this.incrementCount2}
                {...this.props} // this is here because we want to pass the props that we get from the HigherOrderParentComp to the Click and Hover components . when you used the hoc and want to used props from the parent component you need to pass the props like this {...this.props
            /> // third we return the original component with the props we want to pass to it
        }
    }
    return WithCounter // fourth we return the new component
}

export default withCounter // fifth we export the new component to the component that will use it
