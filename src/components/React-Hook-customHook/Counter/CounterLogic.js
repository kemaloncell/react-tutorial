import {useState} from "react";
// this is a component of logic so we just write common and repetitive logic here
// so in this example we wrote a few function in order to use other components

// default value of initialState is  0 so when we send the parameter from other component it updates the state.
// and also as second parameter, we can do this dynamically
function CounterLogic(initialState = 0, value){
    const [count, setCount] = useState(initialState)

    const increment = () => {
        setCount((prevState) =>  prevState + value)
    }

    const decrement = () => {
        setCount(prevState => prevState - value)
    }

    const reset = () => {
        setCount(0)
    }
// end of the logic we returned our code so that we can use it in other components
    return[count, increment, decrement, reset]
}

export default CounterLogic
