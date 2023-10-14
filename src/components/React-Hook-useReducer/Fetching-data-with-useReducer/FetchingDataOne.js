import axios from 'axios';
import React, {useState, useEffect} from 'react'


function FetchingDataOne() {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState({})
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            setLoading(false)
            setPost(res.data)
            setError('')
        })
        .catch(error => {
            setLoading(false)
            setPost({})
            setError('something went wrong')
        })
    }, [])
  return (
    <div>
        {loading ? 'loading': post.title}
        {error ? error : null}
    
    </div>
  )
}

export default FetchingDataOne