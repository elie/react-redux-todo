import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <li>{this.props.task}</li>
        <button onClick={this.props.deleteTodo}>X</button>
      </div>
    );
  }
}
