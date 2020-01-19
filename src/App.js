import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CreateTodo from "./pages/CreateTodo";
import TodoList from "./pages/TodoList";

const App = () => {
  const [dummies, setDummies] = useState([
    {
      id: 1,
      title: "groceries",
      description: "do groceries",
      status: "pending",
      due_date: "january 20th, 2020"
    },
    {
      id: 2,
      title: "gas",
      description: "fill gas",
      status: "pending",
      due_date: "january 20th, 2020"
    },
    {
      id: 3,
      title: "charge phone",
      description: "need phone battery to work bruh",
      status: "pending",
      due_date: "january 20th, 2020"
    }
  ]);

  const handleCreateTodo = todo => {
    setDummies(state => {
      return [...state, todo];
    });
  };

  return (
    <Router>
      <div>
        <h1 className="f2 tc ph4">NorthOne Front End Challenge</h1>
      </div>

      <Route
        exact
        path="/"
        render={props => {
          return <TodoList dummies={dummies} {...props} />;
        }}
      />

      <Route
        path="/create"
        render={props => {
          return <CreateTodo handleCreateTodo={handleCreateTodo} {...props} />;
        }}
      />
    </Router>
  );
};

export default App;
