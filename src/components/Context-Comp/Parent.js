import React from "react";
import ComponentC from "./ComponentC";
import {UserProvider} from './UserContext' // 1. import provider from parent component
class Parent extends React.Component {
  render() {
    // User-Provide is a component that provides the value to the context. its name of prop should be 'value'
    return (
      <div>
        <UserProvider value='context-props-kemal'>
         <ComponentC/>
        </UserProvider>
      </div>
    );
  }
}

export default Parent;
