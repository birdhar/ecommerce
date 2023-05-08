import * as Yup from "yup";

export const signupSchema = Yup.object({
  firstname: Yup.string()
    .min(2, "Must be at least 2 characters")
    .max(10, "At most 10 characters")
    .required("Please enter your first name"),
  lastname: Yup.string()
    .min(2, "Must be at least 2 characters")
    .max(10, "At most 10 characters")
    .required("Please enter your last name"),
  username: Yup.string()
    .min(8, "Must be at least 8 characters")
    .max(10, "Must be less  than 10 characters")
    .required("Please enter your user name")
    .matches(/^[a-zA-Z0-9_\s]+$/, "Only alphabets are allowed for this field "),
  email: Yup.string().email().required("Please enter your email"),
  phone: Yup.string().required("Please enter your phone number"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .max(14, "At most 14 characters")
    .required("Please enter your password"),
});
