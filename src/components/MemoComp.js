import React from 'react'

function MemoComp({name}){
    console.log('rendering memo component')
    return(
        <div>
            {name}
        </div>
    )
}

// if ı  use React.memo component its avoid the re-rendering
export default React.memo(MemoComp)
