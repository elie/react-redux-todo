import React, { Component } from "react";
import { connect } from "react-redux";
import { createTask } from "../actionCreators";

class NewTodoForm extends Component {
  state = {
    task: ""
  };
  handleChange = evt => {
    this.setState({
      task: evt.target.value
    });
  };
  createTodo = evt => {
    evt.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({
      task: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.createTodo}>
          <label htmlFor="task">Task:</label>
          <input
            id="task"
            type="text"
            onChange={this.handleChange}
            value={this.state.task}
          />
          <button>Add a todo!</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { createTask }
)(NewTodoForm);
