import Image from "next/image";
import profileImg from "@/images/profile.jpg"
import styles from '@/styles/aboutMe/footer.module.css'
import indexStyles from '@/styles/index.module.css'
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <h3 className={indexStyles.infoTitle}>Links</h3>
          <div className={styles.linkContainer}>
            
          <Link className={styles.link} href='https://www.linkedin.com/in/matas-aleli%C5%ABnas-690180248/'>LinkedIn</Link>
          <Link className={styles.link} href='https://github.com/MatasA-commits'>GitHub</Link>
          </div>
        </div>
  );
}

export default Footer;