import styles from '@/styles/aboutMe/skills.module.css'
import indexStyles from '@/styles/index.module.css'

const Skills = () => {
  return (
    <div className={styles.container}>
      <h3 className={indexStyles.infoTitle}>Relevant skills</h3>
      <div>
        <ul className={styles.skillList}>
          <li>Next.js</li>
          <li>React.js</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;