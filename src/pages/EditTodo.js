import React from "react";
import { Formik } from "formik";
import InputField from "../common/InputField";
import TextArea from "../common/TextArea";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";

const EditTodo = ({ location, handleEditTodo, history }) => {
  const { todo } = location.state;
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <Formik
        initialValues={{
          title: todo.title,
          description: todo.description,
          status: todo.status,
          due_date: todo.due_date
        }}
        onSubmit={(values, actions) => {
          handleEditTodo(todo._rev, todo._id, values);
          history.push("/");
        }}
      >
        {({ handleSubmit, handleChange, setFieldValue, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              <InputField
                label="Title"
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
              />
              <TextArea
                label="Description"
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
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
