import React from "react";
import { Formik } from "formik";
import InputField from "../common/InputField";
import TextArea from "../common/TextArea";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";

const initialValues = {
  title: "",
  description: "",
  status: "pending",
  due_date: new Date()
};
const CreateTodo = ({ handleCreateTodo, history }) => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log("values", values);
          handleCreateTodo(values);
          actions.setSubmitting(false);
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
                onChange={handleChange}
              />
              <TextArea
                label="Description"
                type="text"
                name="description"
                onChange={handleChange}
              />
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
