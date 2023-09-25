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
// it's for functional components --- we can use pure component for only class component
export default React.memo(MemoComp)
