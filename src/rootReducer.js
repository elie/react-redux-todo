import uuid from "uuid/v1";

const INITIAL_STATE = {
  todos: []
};

export default function rootReducer(state = INITIAL_STATE, action) {
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todos: [...state.todos, { task: action.task, id: uuid() }]
    };
  }
  if (action.type === "DELETE_TODO") {
    const updatedTodos = state.todos.filter(todo => todo.id !== action.id);
    return { ...state, todos: updatedTodos };
  }
  return { ...state };
}
