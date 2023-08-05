import Image from "next/image";
import profileImg from "@/images/profile.jpg"
import styles from '@/styles/aboutMe/header.module.css'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div>
        <Image className={styles.imgContainer} src={profileImg} alt="Profile image"></Image>
      </div>
      <div>
        <div>
          <h2 className={styles.name}>Matas Aleliūnas</h2>
          <p className={styles.developerType}>Front-end developer</p>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Header;