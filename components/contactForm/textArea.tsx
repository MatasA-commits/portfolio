import styles from "../../styles/contactForm/contactForm.module.css";

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  error?: boolean;
  errorMessage?: string;
}
const TextArea = ({
  id,
  name,
  label,
  placeholder,
  error,
  errorMessage,
  ...props
}: TextAreaProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        {...props}
        id={id}
        name={name}
        rows={5}
        placeholder={placeholder}
        className={`${styles.inputGroup} ${styles.textArea}`}
      ></textarea>
      {error && <p className={styles.error}>*{errorMessage}</p>}
    </div>
  );
};
export default TextArea;
