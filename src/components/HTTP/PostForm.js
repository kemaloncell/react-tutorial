import React, {Component} from 'react'
import axios from "axios";
class PostForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            // we have to fill these properties with input values
            userId: '',
            title: '',
            body: '',
        }
    }

     changeHandler = (e) => {
        //  we have to fill these properties with input values without repeating code
         // and as you can see we have to use [e.target.name] to get the name of the input and set it to the state for each input value

        return this.setState({
            [e.target.name]: e.target.value,
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(((res) => console.log(res)))
            .catch((err) => console.log(err))
    }

    render(){
        const { userId, title, body} = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                <div>
                    <input type='text' name='userId' value={userId} onChange={this.changeHandler} />
                </div>
                <div>
                    <input type='text' name='title' value={title} onChange={this.changeHandler}/>
                </div>
                <div>
                    <input type='text' name='body' value={body} onChange={this.changeHandler}/>
                </div>
                    <button type='submit'>Save</button>
                </form>
            </div>
        )
    }
}

export default PostForm
