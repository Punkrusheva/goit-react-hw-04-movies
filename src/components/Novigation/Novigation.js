import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Novigation.module.css';
//import routes from '../routes';

const Navigation = () => (
  <ul className={styles.headerMenu}>
    <li className={styles.headerMenuItem}>
      <NavLink exact to="/"
        className={styles.navLink}
        activeClassName={styles.navLinkActive}>Home</NavLink>
      </li>
    <li className={styles.headerMenuItem}>
      <NavLink to="/movies"
        className={styles.navLink}
        activeClassName={styles.navLinkActive}>Movies</NavLink>
      </li>
    </ul>
);

export default Navigation;