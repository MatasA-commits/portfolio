import Link from "next/link";
import { ProjectTypes } from "./ProjectsLinks";
import styles from "@/styles/mainPage/projects.module.css"

const NavBarLink = ({ name, url, stack, state }: ProjectTypes) => {
  return (
    <div>
      <Link href={url}>
            <div className={styles.projectLink}>
             <h4>{name}</h4>  
             <p className={styles.projectStack}>{stack}</p>
             <p>State: {state}</p>
            </div>
            </Link>
    </div>
  );
};

export default NavBarLink;
