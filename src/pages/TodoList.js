import React from "react";

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
    </ul>
  );
};

export default TodoList;
