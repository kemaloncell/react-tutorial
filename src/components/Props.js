import React from 'react';


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
 export default Props;
