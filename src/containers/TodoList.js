import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";

class TodoList extends Component {
  handleDelete = id => {
    debugger;
    this.props.dispatch({
      type: "DELETE_TODO",
      id
    });
  };
  render() {
    debugger;
    const todos = this.props.todos.map(todo => (
      <Todo
        deleteTodo={() => this.handleDelete(todo.id)}
        key={todo.id}
        task={todo.task}
      />
    ));
    return (
      <div>
        <ul>{todos}</ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  debugger;
  return {
    todos: reduxState.todos,
    name: "Mary"
  };
}

export default connect(mapStateToProps)(TodoList);
