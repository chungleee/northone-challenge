import React from "react";
import { Link } from "react-router-dom";

const TodoList = ({ dummies }) => {
  return (
    <ul className="list pa2">
      {dummies.map(dummy => {
        return (
          <li className="ba br3 mb1" key={dummy.id}>
            <h3 className="f4 ttc">{dummy.title}</h3>
          </li>
        );
      })}
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
