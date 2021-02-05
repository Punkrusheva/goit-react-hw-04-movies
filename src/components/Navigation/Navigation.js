import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import routes from "../../routes";

const Navigation = () => (
  <ul className={styles.headerMenu}>
    <li className={styles.headerMenuItem}>
      <NavLink exact to={routes.home}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}>Home</NavLink>
      </li>
    <li className={styles.headerMenuItem}>
      <NavLink to={routes.moviesPage}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}>Movies</NavLink>
      </li>
    </ul>
);

export default Navigation;