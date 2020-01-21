import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../context";

const Todo = ({ match }) => {
  const { url, params } = match;
  const { handleGetTodoById, todo, handleEditTodo } = useContext(TodoContext);

  const handleToggleTask = task => {
    const updatedTasks = todo.tasks.map(taskToEdit => {
      if (taskToEdit.id === task.id) {
        taskToEdit.completed = !taskToEdit.completed;
        return taskToEdit;
      }
      return taskToEdit;
    });
    todo.tasks = updatedTasks;
    return todo;
  };

  useEffect(() => {
    handleGetTodoById(params.todoId);
  }, []);

  if (!todo) {
    return <div>Loading todo</div>;
  }

  return (
    <div className="pa3">
      <Link className="link black underline f4" to="/">
        <i className="fas fa-home"></i>
      </Link>
      <div className="tc ttc">
        <h1 className="f1 lh-title">{todo.title}</h1>
        <p className="f3 lh-copy">{todo.description}</p>
      </div>
      {todo.tasks.length > 0 ? (
        <ul className="list pa0">
          {todo.tasks.map(task => {
            return (
              <li
                className="ba br4 pv1 ph2 mb2 ttc flex justify-between items-center"
                key={task.id}
              >
                <h1
                  className={
                    task.completed
                      ? `f5 lh-copy normal strike`
                      : "f5 lh-copy normal"
                  }
                >
                  {task.task}
                </h1>
                <span>
                  {!task.completed ? (
                    <i
                      onClick={() => {
                        const res = handleToggleTask(task);
                        handleEditTodo(todo._id, todo._rev, res);
                      }}
                      className="grow far fa-circle pointer"
                    ></i>
                  ) : (
                    <i
                      onClick={() => {
                        const res = handleToggleTask(task);
                        handleEditTodo(todo._id, todo._rev, res);
                      }}
                      className="grow far fa-check-circle green pointer"
                    ></i>
                  )}
                  <i className="grow fas fa-trash red ml1 pointer"></i>
                </span>
              </li>
            );
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
