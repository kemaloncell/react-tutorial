import React, {useEffect} from "react";

function useDocumentTitle(count){
    // we apply useEffect to the two components.
    useEffect(() => {
        document.title = `count ${count}`
    },[count])
}

export default useDocumentTitle
