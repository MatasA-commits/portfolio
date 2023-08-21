import axios from "axios";
import { useState } from "react";
import { validate } from "./validate";
import Input from "./input";
import TextArea from "./textArea";
import styles from "../../styles/contactForm/contactForm.module.css";

interface IValues {
  name: string;
  email: string;
  message: string;
}
interface IErrors extends Partial<IValues> {}
export const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<IErrors>({});
  const [success, setSuccess] = useState(false);
  const [messageState, setMessageState] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(values);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    }
    setErrors({});
    axios
      .post("/api/mail", {
        name: values.name,
        email: values.email,
        message: values.message,
      })
      .then((res) => {
        if (res.status === 200) {
          setValues({ name: "", email: "", message: "" });
          setSuccess(true);
          setMessageState(res.data.message);
        } else {
          setSuccess(false);
          setMessageState(res.data.message);
        }
      })
      .catch((err) => {
        setSuccess(false);
        setMessageState(String(err.message));
      });
  };
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <p className={styles.messageResponse}>
        {success !== false ? (
          <span className={styles.success}>{messageState}</span>
        ) : (
          <span className={styles.error}>{messageState}</span>
        )}
      </p>

      <Input
        value={values.name}
        onChange={handleChange}
        id="name"
        name="name"
        label="Name"
        placeholder="Input your name here"
        error={!!errors.name}
        errorMessage={!!errors.name ? errors.name : ""}
      />
      <Input
        value={values.email}
        onChange={handleChange}
        id="email"
        name="email"
        label="Email"
        placeholder="Input your email here"
        error={!!errors.email}
        errorMessage={!!errors.email ? errors.email : ""}
      />
      <TextArea
        value={values.message}
        onChange={handleChange}
        id="message"
        name="message"
        label="Message"
        placeholder="Input your message here..."
        error={!!errors.message}
        errorMessage={!!errors.message ? errors.message : ""}
      />
      <div className={styles.submitBtnContainer}>
        <button className={styles.submitBtn} type="submit">
          {"Send"}
        </button>
      </div>
    </form>
  );
};
