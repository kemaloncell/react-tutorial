import React from 'react';

function ColumnFragmentExp() {
    return (
        // you should use <React.Fragment> instead of <div> to avoid extra <div> in the DOM
        <div>
            <td>Name</td>
            <td>Age</td>
        </div>

        // and you can use <></> instead of  <React.Fragment></React.Fragment> as a shorthand
    )
}

export default ColumnFragmentExp
