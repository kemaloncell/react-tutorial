import React from 'react';
import Columns from './ColumnFragmentExp';
function TableFragmentExp() {
    return(
        <React.Fragment>
        <table>
            <tbody>
            <tr>
                <Columns/>
            </tr>
            </tbody>
        </table>
        </React.Fragment>
    )
}

export default TableFragmentExp
