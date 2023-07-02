import { usePathname } from "next/navigation";
import Link from "next/link";
import { LinkTypes } from "./Links";
import styles from '@/styles/navBar/navBarLink.module.css';

const NavBarLink = ({name, url}: LinkTypes) => {
  const pathname = usePathname();
  const activeLink = (url: string, pathname: string) =>
    pathname === url ? `${styles.navBarLinkActive}` : '';
  return (
    <li className={styles.navBarLink}>
      <Link href={url} className={activeLink(url, pathname)}>
              {name}
      </Link>
    </li>
  );
}

export default NavBarLink