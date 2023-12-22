import React, {useEffect, useState} from "react";
import useDocumentTitle from "./useDocumentTitle";

function DocTitle2(){
    const [count, setCount] = useState(0)

    useDocumentTitle(count) // we called this component to be able to avoid rewriting

    return(
        <div>
            <button onClick={(() => setCount(count + 1))}>increase count2 + {count}</button>
        </div>
    )
}

export default DocTitle2
