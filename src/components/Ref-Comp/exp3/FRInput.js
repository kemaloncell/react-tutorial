import React from 'react'

// use React.forwardRef() to pass the ref from the parent component to the child component
// React.forwardRef() takes a function as a parameter and returns a function
// The function takes two parameters: props and ref and returns the component
// paramter came from the parent component, and we used according to it
const FRInput = React.forwardRef((props, ref) =>{
    return(
        <input type='text' ref={ref}/>
    )
})
export default FRInput
