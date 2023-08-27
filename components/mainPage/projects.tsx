import styles from "@/styles/mainPage/projects.module.css";
import indexStyles from "@/styles/index.module.css";
import Link from "next/link";


const Projects = () => {
  return (
    <div className={styles.container}>
      <h3 className={indexStyles.infoTitle}>Projects</h3>
        <div className={styles.projectsContainer}>
          <Link href='https://message-app-4ezp.onrender.com/'>
            <div className={styles.projectLink}>
             <h4>Message app</h4>  
             <p>React.js, Node.js, Mongo db</p>
            </div>
            </Link>
        </div>
    </div>
  );
};

export default Projects;
