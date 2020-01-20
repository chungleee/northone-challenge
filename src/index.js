import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "tachyons";
import { TodoContext, TodoProvider } from "./context";

ReactDOM.render(
  <TodoProvider>
    <App />
  </TodoProvider>,
  document.getElementById("root")
);
