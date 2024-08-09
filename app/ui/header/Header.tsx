
'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import styles from './Header.module.css';


const navLinks = [
  { title: "Task 1", path: '/' },
  { title: "Task 2", path: '/fetch-user' },
  { title: "Task 3", path: '/third-task' }
]

const Header = () => {
  const pathname = usePathname()
  
  return (
    <header className={styles.headerBox}>
      <ul className={styles.headerLists}>
        {
          navLinks.map((link) => (
            <li key={link.title}>
              <Link href={link.path} className={`${styles.headerLink} ${pathname === link.path ? "activeLink" : ""}`}
                passHref >

                {link.title}

              </Link>
            </li>
          ))
        }
      </ul>
    </header>
  );
};

export default Header;
