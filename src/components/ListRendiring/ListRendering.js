 import React from 'react'
import ListRenderingItem from './ListRenderingItem'
    function ListRendering() {
      /* approach 1 =  const names = ['Bruce', 'Clark', 'Diana']
        return (
            <div>
                {
                    // we have to use curly braces for javascript code in jsx
                    names.map(name =>  <h1>{name}</h1> )
                }
            </div>
        ) */
           /* approach 2 =
        const names = ['Bruce', 'Clark', 'Diana']
        const nameList =  names.map(name =>  <h1>{name}</h1> )
        return (
            <div>{nameList}</div>
        ) */
        /* approach 3 = object array rendering
        const persons = [
            {
                id: 1,
                name: 'Bruce',
                age: 30,
                skill: 'React'
            },
            {
                id: 2,
                name: 'Clark',
                age: 25,
                skill: 'Angular'
            },
            {
                id: 3,
                name: 'Diana',
                age: 28,
                skill: 'Vue'
            },
        ]
        const personList = persons.map(person => <h2>{person.name}- {person.age}- {person.skill}</h2>)
        return <div>{personList}</div> */
        /* approach 4 = key prop, the best way to using
        const persons = [
            {
                id: 1,
                name: 'Bruce',
                age: 30,
                skill: 'React'
            },
            {
                id: 2,
                name: 'Clark',
                age: 25,
                skill: 'Angular'
            },
            {
                id: 3,
                name: 'Diana',
                age: 28,
                skill: 'Vue'
            },
        ]
        const personList = persons.map(person =>  <ListRenderingItem key={person.id} person={person}/>)
        return <div>{personList}</div>
         */
        /* approach 5 = index as key anti pattern = if you don't have unique list items, you can use index as key
        but if you have unique list items, you should not use index as key because it will cause performance issues
        and if you have items that can be reordered or deleted, then you should not use index as key because it will cause unexpected behaviour
        you can use index as key if your list is static and will not change.
        * */
        const names = ['Bruce', 'Clark', 'Diana']
        const nameList = names.map((name, i) =>  <div key={i}>{name}</div>)
        return <div>{nameList}</div>
}

    export default ListRendering
