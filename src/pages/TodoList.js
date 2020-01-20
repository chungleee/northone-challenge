import React from "react";
import { Link } from "react-router-dom";

const TodoList = ({ todos, loading, handleDeleteTodo }) => {
  return (
    <ul className="list pa2">
      {loading ? (
        <div>Loading...</div>
      ) : !todos.length ? (
        <div>Todo List is empty!</div>
      ) : (
        todos.map(todo => {
          return (
            <li
              className="flex justify-between items-center  ba br3 mb1 ph2 grow"
              key={todo._id}
            >
              <Link
                className="link black"
                to={{
                  pathname: `/todo/${todo._id}`,
                  state: {
                    todo
                  }
                }}
              >
                <h3 className="f4 ttc">{todo.title}</h3>
              </Link>
              <div>
                <i
                  onClick={() => {
                    handleDeleteTodo(todo._id, todo._rev);
                  }}
                  className="far fa-trash-alt red pointer"
                ></i>
              </div>
            </li>
          );
        })
      )}
      <Link
        className="link black"
        style={{ position: "absolute", bottom: "1rem", right: "1rem" }}
        to="/create"
      >
        <div className="ba br-100 h3 w3 flex justify-center items-center">
          +
        </div>
      </Link>
    </ul>
  );
};

export default TodoList;
