import React, {Component} from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            comments:'',
            topic:'React'
        }
     //   this.changeUsername = this.changeUsername.bind(this)
    }
   /* changeUsername(event){
    this.setState({
        username : event.target.value
    })
    }*/

    handleUsernameChange = (event) =>{
        this.setState({
            username : event.target.value,

        })
    }

    handleCommentsChange = (event) =>{
        this.setState({
            comments : event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
            alert(`${this.state.username} ${this.state.comments} ${this.state.topic} `)
           event.preventDefault()
        }
    render(){
        const {username, comments, topic} = this.state
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
               <label>Username: </label>
                <input type='text' value={username} onChange={this.handleUsernameChange} />
                <label>message = {this.state.username}</label>
            </div>
                <br/><br/>
             <div>
               <label>Comments: </label>
                <textarea onChange={this.handleCommentsChange} />
                <label>message = {comments}</label>
            </div>
                <br/><br/>
                <div>
                    <label>Topic: </label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value='Vue'>Vue</option>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form
