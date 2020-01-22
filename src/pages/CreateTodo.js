import React, { useState, useContext } from "react";
import { Formik } from "formik";
import InputField from "../common/InputField";
import TextArea from "../common/TextArea";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import uuid from "uuid/v4";
import fieldSchema from "../validation";
import { TodoContext } from "../context";

const initialValues = {
  title: "",
  description: "",
  tasks: "",
  status: "pending",
  due_date: new Date()
};
const CreateTodo = ({ history }) => {
  const [tasks, setTasks] = useState([]);
  const { handleCreateTodo } = useContext(TodoContext);
  return (
    <div className="flex flex-column justify-center ph3 mw6-ns center-ns">
      <Link className="link underline black f4" to="/">
        <i className="fas fa-home"></i>
      </Link>
      <Formik
        initialValues={initialValues}
        validationSchema={fieldSchema}
        validateOnChange={false}
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
                      setTasks(state => {
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
              {tasks.length > 0 ? (
                <ul>
                  {tasks.map(task => {
                    return <li key={task.id}>{task.task}</li>;
                  })}
                </ul>
              ) : null}
              <div className="mb5">
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
              <div className="flex mt5">
                <div className="center">
                  <button type="reset">Reset</button>
                  <button type="submit">Save</button>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateTodo;
