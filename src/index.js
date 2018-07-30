import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const ourReduxStore = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={ourReduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
