import React from "react";

const dummies = [
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
];
const TodoList = () => {
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
