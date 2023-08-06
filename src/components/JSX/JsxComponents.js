import React from 'react';

const JsxComponent = () => {
    // we imported the React begging the page and React hooks turned the code to jsx syntax like under
   /* return(
        <div className ='dummyClass' >
            <h1>jsx Components</h1>
        </div>
    ) */

    // if we don't use jsx the code structure getting difficult
   return React.createElement(
        'div',
       {id: 'hello'},
        React.createElement('h1',{ className: 'dummyClass' },'create jsx element')
    )
}

export default JsxComponent
