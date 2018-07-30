import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { fetchTodos } from "../actionCreators";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const todos = this.props.todos.map(todo => (
      <Todo key={todo.id} task={todo.task} />
    ));
    return (
      <div>
        <ul>{todos}</ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos,
    name: "Mary"
  };
}

export default connect(
  mapStateToProps,
  { fetchTodos }
)(TodoList);
