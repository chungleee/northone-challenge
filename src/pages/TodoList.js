import React from "react";
import { Link } from "react-router-dom";

const TodoList = ({ todos, loading }) => {
  return (
    <ul className="list pa2">
      {loading ? (
        <div>Loading...</div>
      ) : !todos.length ? (
        <div>Todo List is empty!</div>
      ) : (
        todos.map(todo => {
          return (
            <li className="ba br3 mb1" key={todo._id}>
              <h3 className="f4 ttc">{todo.title}</h3>
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
