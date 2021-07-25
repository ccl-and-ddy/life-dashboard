import React from 'react';
import styles from './Nav.module.scss';

const Nav = () => (
  <nav className={styles.Nav}>
    <ul>
      <li>
        <a href="/about">about</a>
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
