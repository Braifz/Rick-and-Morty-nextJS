import { useState } from "react";
import { Form, Formik, Field } from "formik";
import Link from "next/link";
import styles from "../styles/signup.module.css";

const signup = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };

  const onSubmit = (values, { resetForm }) => {
    const { username, password } = values;
    console.log(values.username, values.password);
    localStorage.setItem("user", {
      username,
      password,
    });
    resetForm({ values: "" });
  };

  return (
    <div className={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={styles.form}>
          <h1 className={styles.title}>Sign Up</h1>
          <label>firstName</label>
          <Field
            className={styles.input}
            id="firstName"
            name="firstName"
            type="text"
          />
          <label>lastname</label>
          <Field
            className={styles.input}
            id="lastName"
            name="lastName"
            type="text"
          />
          <label>email</label>
          <Field
            className={styles.input}
            id="email"
            name="email"
            type="email"
          />
          <label>username</label>
          <Field
            className={styles.input}
            id="username"
            name="username"
            type="text"
          />
          <label>password</label>
          <Field
            className={styles.input}
            id="password"
            name="password"
            type="password"
          />
          <button className={styles.btn} type="submit">
            Submit
          </button>
          <div className={styles.signin}>
            <Link href="/signin">Are you already registered? Sign In</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default signup;
