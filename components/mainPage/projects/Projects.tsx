import styles from "@/styles/mainPage/projects.module.css";
import indexStyles from "@/styles/index.module.css";
import ProjectsLinks from "./ProjectsLinks";
import ProjectLink from "./ProjectLink";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h3 className={indexStyles.infoTitle}>Projects</h3>
      <p>Backend takes some time to spin up</p>
      <p>You can use this login - username: Test12, password: Test@</p>
      <div className={styles.projectsContainer}>
        {ProjectsLinks.map(({ name, url, stack, state }) => (
          <ProjectLink key={url} name={name} url={url} stack={stack} state={state} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
