import React, { useContext, useState } from "react";
import { Formik } from "formik";
import uuid from "uuid/v4";
import InputField from "../common/InputField";
import TextArea from "../common/TextArea";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import fieldSchema from "../validation";
import { TodoContext } from "../context";

const EditTodo = ({ location, history }) => {
  const { todo } = location.state;
  const { handleEditTodo } = useContext(TodoContext);
  const [newTasks, setNewTasks] = useState(todo.tasks);
  return (
    <div className="pa3">
      <div>
        <Link className="link black underline f4" to="/">
          Homepage
        </Link>
      </div>
      <Formik
        initialValues={{
          title: todo.title,
          description: todo.description,
          status: todo.status,
          tasks: "",
          due_date: todo.due_date
        }}
        validationSchema={fieldSchema}
        validateOnChange={false}
        onSubmit={values => {
          values.tasks = newTasks;
          handleEditTodo(todo._rev, todo._id, values);
          history.goBack();
        }}
      >
        {({ handleSubmit, handleChange, setFieldValue, values, errors }) => {
          return (
            <form className="mt4" onSubmit={handleSubmit}>
              <InputField
                label="Title"
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
                errors={!errors.title ? null : errors.title}
              />
              <TextArea
                label="Description"
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                errors={!errors.description ? null : errors.description}
              />

              <div className="flex items-end justify-between">
                <InputField
                  label="Add some tasks"
                  type="text"
                  value={values.tasks}
                  name="tasks"
                  onChange={handleChange}
                  errors={!errors.tasks ? null : errors.tasks}
                />
                <div>
                  <button
                    className="mb2"
                    onClick={() => {
                      const newTask = {
                        id: uuid(),
                        task: values.tasks,
                        completed: false
                      };
                      setNewTasks(state => {
                        return [...state, newTask];
                      });
                      setFieldValue("tasks", "");
                    }}
                    type="button"
                  >
                    Add
                  </button>
                </div>
              </div>
              {newTasks.length > 0 ? (
                <ul>
                  {newTasks.map(task => {
                    return <li key={task.id}>{task.task}</li>;
                  })}
                </ul>
              ) : null}
              <div>
                <label htmlFor="due_date" className="f4 b db mb2">
                  Set due date
                </label>
                <DatePicker
                  name="due_date"
                  onChange={date => setFieldValue("due_date", date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={30}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  placeholderText="Select new date and time"
                />
              </div>
              <button type="reset">Reset</button>
              <button type="submit">Save</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EditTodo;
