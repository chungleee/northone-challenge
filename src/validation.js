import * as yup from "yup";

const fieldSchema = yup.object().shape({
  title: yup.string().required("This field is required!"),
  description: yup.string().required("Cmon, add a lil description")
});

export default fieldSchema;
