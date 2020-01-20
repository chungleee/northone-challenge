import React, { useState } from "react";
import { Formik } from "formik";
import InputField from "../common/InputField";
import TextArea from "../common/TextArea";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import uuid from "uuid/v4";

const initialValues = {
  title: "",
  description: "",
  tasks: "",
  status: "pending",
  due_date: new Date()
};
const CreateTodo = ({ handleCreateTodo, history }) => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="ph3">
      <div>
        <Link className="link underline black f4" to="/">
          Homepage
        </Link>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          values.tasks = tasks;
          handleCreateTodo(values);
          history.push("/");
        }}
      >
        {({ handleSubmit, handleChange, setFieldValue, values, errors }) => {
          return (
            <form className="mt4" onSubmit={handleSubmit}>
              <InputField
                label="Title"
                type="text"
                name="title"
                onChange={handleChange}
                errors={!errors.title ? null : errors.title}
              />
              <TextArea
                label="Description"
                type="text"
                name="description"
                onChange={handleChange}
                errors={!errors.description ? null : errors.description}
              />
              <div>
                <InputField
                  label="Add some tasks"
                  type="text"
                  value={values.tasks}
                  name="tasks"
                  onChange={handleChange}
                  errors={!errors.tasks ? null : errors.tasks}
                />
                <input
                  type="button"
                  value="Add"
                  onClick={() => {
                    const newTask = {
                      id: uuid(),
                      task: values.tasks
                    };
                    setTasks(state => {
                      return [...state, newTask];
                    });
                    setFieldValue("tasks", "");
                  }}
                />
              </div>
              {tasks.length > 0 ? (
                <ul>
                  {tasks.map(task => {
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
                  selected={values.due_date}
                  onChange={date => setFieldValue("due_date", date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={30}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  placeholderText="Select a date and time"
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

export default CreateTodo;
