import React, {useEffect, useState} from 'react'
import axios from "axios";

function DataFetchingGetOne(){
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButton, setIdFromButton] = useState(1)
    const fetchData = (prevState) => {
        setIdFromButton(idFromButton + 1)
    }
    useEffect(() => {
        //axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        axios.get('https://jsonplaceholder.typicode.com/posts/'+idFromButton)
            .then((res) => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => console.log(err))
/*
burada id dependecy yani bağımlılık onda ona göre
inputa değer girildiğinde tekrar istek atması gerekiyor o yüzden stati takip etmemiz gerekir ancak state'deki her şeyi takip edersek
     bu sefer boş yere istek atmış oluruz o yüzden sadece id'yi takip ediyoruz ve o güncellendiğinde istek atıyoruz.*/
    //},[id])
    },[idFromButton])

    return(
                <div>
                    <button onClick={fetchData}>Fetch Data {idFromButton}</button>
                    <input type='text' value={id} onChange={e => setId(e.target.value)}/>
                    <h1>{post.title}</h1>
                </div>
    )
}
export default DataFetchingGetOne
