import React from "react";
function Button({handleClick, children}){
    console.log('button rendered')
    // children where writes inside the button tag means text where is writes inside the parent component =>for example; increment age
    return(
        <button onClick={handleClick}>{children}</button>
    )
}

// React.memo(Button) eğer bunu yazmazsan 'Parent' fonksiyonun içindeki her komponent render olur istenmeyen durum
export default React.memo(Button)
