import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CreateTodo from "./pages/CreateTodo";
import TodoList from "./pages/TodoList";

const App = () => {
  return (
    <Router>
      <div>
        <h1 className="f2 tc ph4">NorthOne Front End Challenge</h1>
      </div>

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

      <Link
        className="link black"
        style={{ position: "absolute", bottom: "1rem", right: "1rem" }}
        to="/create"
      >
        <div className="ba br-100 h3 w3 flex justify-center items-center">
          +
        </div>
      </Link>
    </Router>
  );
};

export default App;
