import React from 'react';


/* if you can destructuring its getting more readable
const Props = ({name,children}) => {
 return(
     <div>
          <h1>
           hi {name}, Props component!
           { children }
          </h1>
     </div>
 )
} */

// or write separate
 const Props = props => {
 const { name, children } = props
  return(
      <div>
           <h1>
            hi {name}, Props component!
            { children }
           </h1>
      </div>
  )
 }


 /*
 simply state
 const Props = (props) => {
  return(
      <div>
           <h1>
            hi {props.name}, Props component!
            { props.children }
           </h1>
      </div>
  )
 }
  */
 export default Props;
