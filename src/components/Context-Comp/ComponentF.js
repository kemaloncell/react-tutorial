import React from 'react';
import {UserConsumer} from "./UserContext"; // import consumer from child component to reach the value of the context
class ComponentF extends React.Component {
    render() {
        // we reach the value of the context by using Consumer component
        // user consumer component is a function that takes a function as a child and that function takes the value of the context as a parameter.
        //  you can use this value in the function body
        return (
            <div>
           <UserConsumer>
               {
                   (username) => {
                       return <div>{username}</div>
                   }
               }
           </UserConsumer>
            </div>
        )
    }
}

export default ComponentF;
