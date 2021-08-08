import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = () => (
  <nav className={styles.Nav}>
    <ul>
      <li>
        <NavLink to="/">home </NavLink>
      </li>
      <li>
        <NavLink to="/about">about</NavLink>
      </li>
      <li>
        <a href="/run">run</a>
      </li>
      <li>
        <a href="/sleep">sleep</a>
      </li>
      <li>
        <a href="/timer">timer</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
