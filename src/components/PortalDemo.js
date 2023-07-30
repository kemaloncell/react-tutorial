import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
return ReactDOM.createPortal( // ReactDOM.createPortal(child, container) it has two arguments child and container
        <h1>
            Portal Demo
        </h1>,
    document.getElementById('portal-root')
)
}

export default PortalDemo
