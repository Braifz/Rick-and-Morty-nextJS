import { Formik, Form, Field } from "formik";
import Link from "next/link";
import styles from "../styles/signin.module.css";

const signin = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({
      values: "",
    });
  };

  return (
    <div className={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={styles.form}>
          <h1 className={styles.title}>Login</h1>
          <label>Username</label>
          <Field
            className={styles.input}
            id="username"
            name="username"
            type="text"
          />
          <label>Password</label>
          <Field
            className={styles.input}
            id="password"
            name="password"
            type="password"
          />
          <button className={styles.btn} type="submit">
            Submit
          </button>
          <div className={styles.signup}>
            <Link href="/signup">You are not registered yet? Sign up</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default signin;
