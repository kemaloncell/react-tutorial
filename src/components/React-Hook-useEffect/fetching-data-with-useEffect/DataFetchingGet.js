import React, {useEffect, useState} from 'react'
import axios from "axios";

function DataFetchingGet(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => console.log(err))

        // we add the [] to avoid the infinity request
        //useEffect fonksiyonunun 2. parametresi hangi state veya props değişikliklerinde çalışacağını belirler.
        // 1. boş liste koymazsan herşeyi takip eder
        // 2. boş yollarsan hiç bir değişkliği takip etmez
        // 3. içine değer girersen [posts] gibi posts güncllendiğinde çalışır sadece diğer değişiklikleri aldırış etmez
    },[])

    return(
            <ul>
                {
            posts.map(item => <li key={item.id}>{item.title}</li>)
                }
            </ul>

    )
}
export default DataFetchingGet
