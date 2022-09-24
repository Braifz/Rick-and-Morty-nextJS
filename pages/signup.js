import { Form, Formik } from "formik";
import styles from "../styles/signup.module.css";

const signup = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <Formik>
        <form className={styles.form}>
          <label>firstName</label>
          <input />
          <label>lastname</label>
          <input />
          <label>email</label>
          <input />
          <label>username</label>
          <input />
          <label>password</label>
          <input />
          <button type="submit">Submit</button>
        </form>
      </Formik>
    </div>
  );
};

export default signup;
