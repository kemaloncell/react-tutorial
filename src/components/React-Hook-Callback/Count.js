import React from "react";

function Count({age}){
    console.log('count rendered')
    return(
        <div>age : {age}</div>
    )
}
// React.memo(Count) eğer bunu yazmazsan 'Parent' fonksiyonun içindeki her komponent render olur istenmeyen durum
export default React.memo(Count)
