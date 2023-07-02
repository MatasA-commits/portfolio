import styles from '@/styles/navBar/navBar.module.css';
import { Noto_Sans } from 'next/font/google';
import Links from './Links';
import NavBarLink from './NavBarLink';

const noto_sans = Noto_Sans({ weight: '500', subsets: ['latin'] });

const NavBar = () => {

  return (
    <div
      className={`${noto_sans.className} ${styles.headerContainer}`}
      style={{ backgroundColor: styles.backgroundColor }}
    >
      <div>
        <ul className={styles.headerLinkContainer}>
          {
          Links.map(({name, url}) => 
          <NavBarLink key={url} name={name} url={url}/>)
          }
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
