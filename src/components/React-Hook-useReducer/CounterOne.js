import React, {useReducer} from "react"; // step 1 define the useReducer from react
// aslında bu useReduceri useState'de arka tarafta bu şekilde kullanıyor bu daha hızlı
const initialState = 0 // this is the count value
const reducer = (state, action) => { // it accepts two parameters and return the new 'state' depending on the 'action'
    switch (action){
        case 'increment': return state + 1
        case 'decrement': return state - 1
        case 'reset' : return initialState
        default: return state
    }
}

function CounterOne(){
/*
 * step 2 define the useReducer it will be take 2 parameter one of them method that returned current state
 and other paramater is action when we want to give a condiditon we can use second poramater like this
 * other useReducer function paramater is initail state we started 0
 *  [count, dispatch] and it returns two item, count is our state, dispatch is our function
 */
    const [count, dispatch] = useReducer(reducer, initialState)

    return(
        <div>
            <h1>{count}</h1>
        <button onClick={() => dispatch('increment')}> increment </button>
        <button onClick={() => dispatch('decrement')}> decrement </button>
        <button onClick={() => dispatch('reset')}> reset </button>
        </div>
    )
}

export default CounterOne
