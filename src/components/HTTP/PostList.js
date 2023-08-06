import React from "react";
import axios from "axios";
class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            errorMsg: ''
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => this.setState({
                posts: res.data
            }))
            .catch((error) => this.setState({ errorMsg : 'error retrieving data'}))
    }

    render() {
        const { posts, errorMsg } = this.state;
        return (
            <div>
            {
                posts ?
                    posts.map((data) => <div key={data.id}>{data.title}</div>) : null
            }
            {
                errorMsg ? <div>{errorMsg}</div> : null
            }
            </div>
        );
    }
}

export default Parent;
