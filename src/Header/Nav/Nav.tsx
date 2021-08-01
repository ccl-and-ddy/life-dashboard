import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = () => (
  <nav className={styles.Nav}>
    <ul>
      <li>
        <Link to="/">home </Link>
      </li>
      <li>
        <Link to="/about">about</Link>
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
