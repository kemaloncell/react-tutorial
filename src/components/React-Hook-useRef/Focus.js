import React, {useEffect, useRef}  from "react"; // step 1


function Focus(){
    const focusInput = useRef(null) // step 2
    useEffect(() => {
  console.log(focusInput)
        // when page is load the input will be focused
        focusInput.current.focus()
    },[])


    // step 3 attach the ref to the input
    return(
        <input ref={focusInput} type='text' />
    )
}

export default Focus
