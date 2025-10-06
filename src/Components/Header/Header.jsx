import { Link } from 'react-router-dom';
import Styles from'./Header.module.css';


export function Header() {
  return (
    <header className={Styles.header}>
     <img src="/images/logo.png" alt="Logo" className={Styles.logo} />
      <nav>
        <ul className={Styles.nav}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Astro'>Astro</Link></li>
        </ul>
      </nav>
    </header>
  );
}
