import React from "react";
import { Formik } from "formik";
import InputField from "../common/InputField";
import TextArea from "../common/TextArea";
import { Link } from "react-router-dom";

const initialValues = {
  title: "",
  description: "",
  status: "pending",
  due_date: ""
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
          handleCreateTodo(values);
          actions.setSubmitting(false);
          history.push("/");
        }}
      >
        {({ handleSubmit, handleChange }) => {
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
