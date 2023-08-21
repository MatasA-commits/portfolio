import styles from "../../styles/contactForm/contactForm.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  error?: boolean;
  errorMessage?: string;
}
const Input = ({
  id,
  name,
  label,
  placeholder,
  error = false,
  errorMessage = "",
  ...props
}: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        {...props}
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className={`${styles.inputGroup} ${styles.inputField}`}
      />
      {error && <p className={styles.error}>*{errorMessage}</p>}
    </div>
  );
};
export default Input;
