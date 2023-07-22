import React, { Component} from "react";

export class ClassComponent extends Component {
    render() {
        const { name } = this.props  // best using
        return <h1>{name} class component</h1>
    }
}

/* simply using props
export class ClassComponent extends Component {
    render() {
        return <h1>{this.props.name} class component</h1>
    }
}

*/
