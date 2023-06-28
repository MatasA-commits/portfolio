import styles from '../styles/navBar.module.css';
import Link from 'next/link';
import { Noto_Sans } from 'next/font/google';
import { usePathname } from 'next/navigation';

const noto_sans = Noto_Sans({ weight: '500', subsets: ['latin'] });

const NavBar = () => {
  const pathname = usePathname();
  const activeLink = (url: string, pathname: string) =>
    pathname === url ? `${styles.navbarLinkActive}` : '';

  return (
    <div
      className={`${noto_sans.className} ${styles.headerContainer}`}
      style={{ backgroundColor: styles.backgroundColor }}
    >
      <div>
        <ul className={styles.headerLinkContainer}>
          <li>
            <Link href="/" className={activeLink('/', pathname)}>
              CV
            </Link>
          </li>
          <li>
            <Link
              href="/certifications"
              className={activeLink('/certifications', pathname)}
            >
              Certifications
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
