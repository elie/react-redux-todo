import axios from "axios";

export function createTask(task) {
  return {
    type: "ADD_TODO",
    task
  };
}

export function displayName(name) {
  return {
    type: "DISPLAY_NAME",
    name
  };
}

export function fetchTodos() {
  return async function(dispatch) {
    const response = await axios.get("http://localhost:3000/todos");
    return dispatch({
      type: "FETCH_TODOS",
      tasks: response.data
    });
  };
}

export function createTaskFromAPI(task) {
  return async function(dispatch) {
    await axios.post("http://localhost:3000/todos", { task });
    return dispatch({
      type: "ADD_TASK",
      task
    });
  };
}
