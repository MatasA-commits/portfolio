import styles from '@/styles/navBar/navBar.module.css';
import { Roboto_Mono } from 'next/font/google';
import Links from './Links';
import NavBarLink from './NavBarLink';
import linkedinLogo from '@/images/linkedin-in.svg'
import githubLogo from '@/images/github.svg'
import Image from 'next/image';
import Link from 'next/link';


const roboto_mono = Roboto_Mono({ weight: '700', subsets: ['latin'] });

const NavBar = () => {

  return (
    <div
      className={`${roboto_mono.className} ${styles.headerContainer}`}
      style={{ backgroundColor: styles.backgroundColor }}
    >
      
        <div className={styles.headerLinkContainer}>
          {
          Links.map(({name, url}) => 
          <NavBarLink key={url} name={name} url={url}/>)
          }
        </div>
      <div className={styles.mediaContainer}>
        <Link href='https://www.linkedin.com/in/matas-aleli%C5%ABnas-690180248'><Image className={styles.mediaLogo} src={linkedinLogo} alt='LinkedIn'></Image></Link>
        <Link href='https://github.com/MatasA-commits'><Image className={styles.mediaLogo} src={githubLogo} alt='Github'></Image></Link>
       {/*  <Link href='/contactForm'><button className={`${roboto_mono.className} ${styles.contactMeBtn}`}>Contact</button></Link> */}
      </div>
    </div>
  );
};

export default NavBar;
