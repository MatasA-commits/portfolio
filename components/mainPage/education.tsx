import styles from "@/styles/mainPage/education.module.css";
import indexStyles from "@/styles/index.module.css";

const Education = () => {
  return (
    <div className={styles.container}>
      <h3 className={indexStyles.infoTitle}>Education history</h3>
      <div className={`${styles.educationContainer} ${indexStyles.infoBox}`}>
        <div>
          <p className={styles.educationTitle}>
            Bachelor degree of Software engineering
          </p>
          <p>Institution: Vilnius Gediminas Technical University</p>
          <p>Year of Graduation: 2022</p>
        </div>
        <div>
          <p className={styles.educationTitle}>
            TypeScript Certificate (1060 h.)
          </p>
          <p>Institution: Code Academy</p>
          <p>Year of issue of the certificate: 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
