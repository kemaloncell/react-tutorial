import React from "react";
function Title(){
    console.log('title rendered')
    return(
        <div>callback title</div>
    )
}
// React.memo(Title) eğer bunu yazmazsan 'ObjectUseState' fonksiyonun içindeki her komponent render olur istenmeyen durum
export default React.memo(Title)
