import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateTodo from "./pages/CreateTodo";
import TodoList from "./pages/TodoList";
import db from "./database";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(null);

  const handleCreateTodo = async todo => {
    try {
      const response = await db.post(todo);
      const newTodo = await db.get(response.id);
      setTodos(state => {
        return [...state, newTodo];
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetTodos = async () => {
    try {
      setLoading(true);
      const res = await db.allDocs({ include_docs: true });
      const todos = res.rows.map(row => {
        return row.doc;
      });
      setLoading(false);
      setTodos(todos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetTodos();
  }, []);

  return (
    <Router>
      <div>
        <h1 className="f2 tc ph4">NorthOne Front End Challenge</h1>
      </div>

      <Route
        exact
        path="/"
        render={props => {
          return <TodoList loading={loading} todos={todos} {...props} />;
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
