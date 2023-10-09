import React, {Component, useEffect, useState} from "react";

function RunEffectOnlyOne(){
    const [x, setX] = useState()
    const [y, setY] = useState()

    const logMouseMove = (e) => {
        console.log('logMouseMove')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('mousemove', logMouseMove)


        // it prevent the re-render code when it does not call from parent component. via: ParentMouse.js
        return() => {
            window.removeEventListener('mousemove', logMouseMove)
        }


        // if you prevent  the state changes, you must add [] into the useEffect
    },[])



  return(
      <div>
          x: {x} - y: {y}
      </div>
  )
}
export default RunEffectOnlyOne
