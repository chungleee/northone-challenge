import React from "react";
import { Formik } from "formik";
import InputField from "../common/InputField";
import TextArea from "../common/TextArea";

const initialValues = {
  title: "",
  description: "",
  status: "pending",
  due_date: ""
};
const CreateTodo = params => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log("values", values);
        actions.setSubmitting(false);
      }}
    >
      {props => {
        return (
          <form onSubmit={props.handleSubmit}>
            <InputField
              label="Title"
              type="text"
              name="title"
              onChange={props.handleChange}
            />
            <TextArea
              label="Description"
              type="text"
              name="description"
              onChange={props.handleChange}
            />
            <button type="submit">Save</button>
          </form>
        );
      }}
    </Formik>
  );
};

export default CreateTodo;
