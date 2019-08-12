import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationBar.module.scss';

function NavigationBar() {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink
              className={styles.navLink}
              exact
              to="/"
              activeStyle={{
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              className={styles.navLink}
              to="/robots"
              activeStyle={{
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
            >
              Robots
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
