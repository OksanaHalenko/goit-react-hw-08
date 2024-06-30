import css from "./LoginForm.module.css";

import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

function LoginForm() {
  const emailId = useId();
  const passwordId = useId();
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("must be a valid email").required("Required"),
    password: Yup.string()
      .min(6, "must be at least 6 characters long")
      .required("Required"),
  });
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, actions) => {
    dispatch(login({ email, password }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label className={css.label} htmlFor={emailId}>
            E-mail
          </label>
          <Field className={css.input} type="email" name="email" id={emailId} />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.wrapper}>
          <label className={css.label} htmlFor={emailId}>
            Password
          </label>
          <Field
            className={css.input}
            type="password"
            name="password"
            id={passwordId}
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <button className={css.btn} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
