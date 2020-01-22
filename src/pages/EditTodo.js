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
    <div className="flex flex-column justify-center ph3 mw6-ns center-ns">
      <div>
        <Link className="link underline black f4" to="/">
          <i className="fas fa-home"></i>
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
              <div className="mb5">
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

export default EditTodo;
