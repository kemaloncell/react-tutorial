import React, { useState } from 'react'

function HookCounter3 () {
    const [ items, setItem ] = useState([])

    const setItems = () => {
        setItem([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return(
        <div>
            <button onClick={setItems}>add Number</button>
            <ul>
                {items.map(item => (
                  <li key={item.id}> {item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCounter3
