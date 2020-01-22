import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../context";

const TodoList = () => {
  const { todos, loading, handleDeleteTodo } = useContext(TodoContext);
  const [value, setValue] = useState("");
  const handleOnChange = event => {
    setValue(event.target.value);
  };
  return (
    <ul className="list pa2">
      <input
        onChange={event => {
          handleOnChange(event);
        }}
        className="input-reset ba b--black-20 pa2 mb2 db w-100"
        type="text"
        aria-describedby="search box"
      />
      {loading ? (
        <div className="tc">Loading...</div>
      ) : !todos.length ? (
        <div className="tc">Todo List is empty!</div>
      ) : (
        todos
          .filter(todo => {
            return todo.title.toLowerCase().includes(value.toLowerCase());
          })
          .map(todo => {
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
