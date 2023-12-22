import React from "react";
import UseInput from "./UseInput";

function UserForm(){
// use our UseInput component to be able to avoid rewriting code
    const [firstName, bindFirstName, resetFirstName] = UseInput('')
    const [lastName, bindLastName, resetLastName] = UseInput('')


    const submitHandler = (e) => {
        e.preventDefault()
        alert(`hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input {...bindFirstName} type="text" />
                <input {...bindLastName} onChange={bindLastName.onChange} type="text" />
             <button>Submit</button>
            </form>
        </div>
    )

}

export default UserForm
