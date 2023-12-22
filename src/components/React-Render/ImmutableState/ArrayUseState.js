import React, {useState} from "react";

const initialValue = ['Kemal','Oncel']


function ObjectUseState(){
    const [persons, setPerson] = useState(initialValue)

    const changeName = () => {
        /*
        when you push element into the same array, the array values changed but reference does not change. so react does not re-render the component
         persons.push('burcu')
        persons.push('oncel')
        setPerson(persons)
        */
        // solution: make a copy of the array push items and then pass the new array into the setter function which name is setPerson
       const tempPerson = [...persons]
        tempPerson.push('Burcu')
        tempPerson.push('Telli')
        setPerson(tempPerson)
    }

    console.log('Immutable change')
    return(
        <div>
         <button onClick={ changeName }> Change name</button>
            {
                persons.map((person) => (
                    <div key={person}>{person}</div>
                ))
            }
        </div>
    )
}

export default ObjectUseState

