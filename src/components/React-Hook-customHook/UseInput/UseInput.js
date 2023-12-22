import React, {useState} from "react";

// we create our custom logic of input

function UseInput(initialValue){

    const [value, setValue] = useState(initialValue)

    const reset = () => {
        setValue(initialValue)
    }

    // you can add this code directly your input element witn {... }
    const bind = {
        // value: value
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    return [value, bind, reset]

}
export default UseInput
