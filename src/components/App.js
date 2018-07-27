import React, { Component } from "react";
import TodoList from "../containers/TodoList";
import NewTodoForm from "../containers/NewTodoForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>See your todos!</h1>
        <TodoList />
        <NewTodoForm />
      </div>
    );
  }
}

export default App;
