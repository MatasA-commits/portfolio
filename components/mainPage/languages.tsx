import styles from "@/styles/mainPage/languages.module.css";
import indexStyles from "@/styles/index.module.css";

const Languages = () => {
  return (
    <div>
      <h3 className={indexStyles.infoTitle}>Languages</h3>
      <div className={`${styles.languages} ${indexStyles.infoBox}`}>
        <p>Lithuanian (Native)</p>
        <p>English (Freely)</p>
      </div>
    </div>
  );
};

export default Languages;
