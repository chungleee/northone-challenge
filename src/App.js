import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateTodo from "./pages/CreateTodo";
import TodoList from "./pages/TodoList";
import Todo from "./pages/Todo";
import EditTodo from "./pages/EditTodo";
import { TodoContext } from "./context";

const App = () => {
  const { handleGetTodos } = useContext(TodoContext);

  useEffect(() => {
    handleGetTodos();
  }, []);

  return (
    <Router>
      <Route
        exact
        path="/"
        render={props => {
          return <TodoList {...props} />;
        }}
      />

      <Route
        path="/create"
        render={props => {
          return <CreateTodo {...props} />;
        }}
      />

      <Route
        exact
        path="/todo/:todoId"
        render={props => {
          return <Todo {...props} />;
        }}
      />

      <Route
        path="/todo/:todoId/edit"
        render={props => {
          return <EditTodo {...props} />;
        }}
      />
    </Router>
  );
};

export default App;
