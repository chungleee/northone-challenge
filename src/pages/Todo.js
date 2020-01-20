import React from "react";
import { Link } from "react-router-dom";

const Todo = ({ location, match }) => {
  const { todo } = location.state;
  console.log("todo", todo);
  const { url } = match;
  return (
    <div className="pa3">
      <Link className="link black underline f4" to="/">
        Homepage
      </Link>
      <h1 className="f3">{todo.title}</h1>
      <p>{todo.description}</p>
      {todo.tasks !== undefined && todo.tasks.length > 0 ? (
        <ul>
          {todo.tasks.map(task => {
            return <li key={task.id}>{task.task}</li>;
          })}
        </ul>
      ) : null}
      <Link
        className="link black underline f4"
        to={{ pathname: `${url}/edit`, state: { todo } }}
      >
        Edit todo
      </Link>
    </div>
  );
};

export default Todo;
