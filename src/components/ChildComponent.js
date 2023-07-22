import React from 'react';

function ChildComponent(props) {
    const { greetHandler } = props
  /* you can simply use this that props to parent component  <button onClick={greetHandler}>Greet Parent</button>
   with parameter <button onClick={() => greetHandler('child ')}>Greet Parent</button
   */
    return <div>
        <button onClick={() => greetHandler('child ')}>Greet Parent</button>
    </div>
}

export default ChildComponent
