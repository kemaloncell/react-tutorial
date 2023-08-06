import React from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";

class Parent extends React.Component {
  render() {
    return (
      <div>
      <PostForm></PostForm>
      </div>
    );
  }
}

export default Parent;
