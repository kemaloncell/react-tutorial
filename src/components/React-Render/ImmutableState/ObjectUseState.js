import React, {useState} from "react";

const initialValue = {
    fname: 'Kemal',
    lname: 'Oncel'
}


function ObjectUseState(){
    const [person, setPerson] = useState(initialValue)

    const changeName = () => {
        /*
        // if you try to mutate directly object it won't be re-rendered
        person.fname = 'burcu'
        person.lname = 'burcu'
        setPerson(person)
         */

        // you have to be carefull there because when the try to change the object; you should choose this way or like
        const tempPerson = {...person}
        tempPerson.fname = 'Burcu'
        tempPerson.lname = 'Telli'
        setPerson(tempPerson)
    }

    console.log('Immutable change')
    return(
        <div>
         <button onClick={ changeName }> {person.fname} \ {person.lname}</button>
        </div>
    )
}

export default ObjectUseState

