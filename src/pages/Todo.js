import React from "react";
import { Link } from "react-router-dom";

const Todo = ({ location, match }) => {
  const { todo } = location.state;
  const { url } = match;
  return (
    <div>
      <h1 className="f3">{todo.title}</h1>
      <p>{todo.description}</p>
      <Link to={{ pathname: `${url}/edit`, state: { todo } }}>Edit todo</Link>
    </div>
  );
};

export default Todo;
