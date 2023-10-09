import React, { useState } from 'react'

function HookCounter2 () {
    const [ name, setName ] = useState({ firstName: '', lastName:'' })

    // setter function(setName) does not merge and update the state(name) or that does not automatically append the item to the end of the list
    return(
        <form>
            <input type='text' value={name.firstName} onChange={e => setName({...name, firstName: e.target.value })}/>
            <input type='text' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value })}/>
            <h2>name: {name.firstName}</h2>
            <h2>last name: {name.lastName}</h2>
        </form>
    )
}
export default HookCounter2
