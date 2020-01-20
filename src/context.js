import React, { createContext, useState } from "react";
import db from "./database";
const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();
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

  const handleGetTodoById = async id => {
    try {
      const response = await db.get(id);
      setTodo(response);
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

  const handleEditTodo = async (_rev, _id, editedTodo) => {
    try {
      const response = await db.put({
        _rev,
        _id,
        ...editedTodo
      });
      const updatedTodo = await db.get(response.id);
      const updatedList = todos.map(todo => {
        if (todo._id === updatedTodo._id) {
          return updatedTodo;
        }
        return todo;
      });
      setTodos(updatedList);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTodo = async (_id, _rev) => {
    try {
      const response = await db.remove(_id, _rev);
      const updatedList = todos.filter(todo => {
        if (todo._id !== response.id) {
          return todo;
        }
      });
      setTodos(updatedList);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleTask = async (_id, _rev, data) => {
    try {
      const response = await db.put({ _id, _rev, data });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        todo,
        todos,
        handleGetTodoById,
        handleGetTodos,
        handleCreateTodo,
        handleEditTodo,
        handleDeleteTodo,
        handleToggleTask
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
