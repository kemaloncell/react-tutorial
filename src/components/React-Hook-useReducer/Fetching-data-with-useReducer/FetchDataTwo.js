import axios from 'axios'
import React, {useReducer, useEffect,} from 'react'

// same exmp with useReduce
const initialState = { // step 1 = define the initial state
    loading: true,
    post: [],
    error: ''
}

const reducer = (state, action) => { // step 2  before define to reduce function specify the cases. we have two cases success fetch and error fetch
    switch(action.type){

        case 'FETCH_SUCCESS':
        return{
            loading: false,
            post: action.payload,
            error: ''
        }

        case 'FETCH_ERROR':
        return{
            loading: false,
            post: {},
            error: 'something went wrong...'
        }
    }
}

function FetchDataTwo() {
    const [state, dispatch] = useReducer(reducer, initialState) // step 3 define the reducer

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            dispatch({type:'FETCH_SUCCESS' , payload: res.data}) // step 4 use dispatch and send related items
        })
        .catch(error => {
            dispatch({type: 'FETCH_ERROR'})
        })

    }, [])

  return (
    <div>
        {state.loading ? 'loading' : state.post.title}
        {state.error ? state.error : null}
    </div>
  )
}

export default FetchDataTwo
