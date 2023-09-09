import { Link, NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className={styles['nav']}>
      <div className={styles['enlaces-menu']}>
        <h1>
          <Link to="/" className={styles['enlaces-menu-titulo']}>HERA Cosmética</Link>
        </h1>
        <ul className={styles['enlaces-menu-item']}>
          <li>
            <NavLink to="/category/faciales" className={styles['enlaces-menu-item-li']}>FACIALES</NavLink>
          </li>
          <li>
            <NavLink to="/category/corporales" className={styles['enlaces-menu-item-li']}>CORPORALES</NavLink>
          </li>
          <li>
            <NavLink to="/category/capilares" className={styles['enlaces-menu-item-li']}>CAPILARES</NavLink>
          </li>
          <div>
            <NavLink to="/cart" className={styles['enlaces-menu-item-cart']}>
              <CartWidget />
            </NavLink>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

