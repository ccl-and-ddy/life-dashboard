import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react';
import styles from './Header.module.scss';
import Nav from '../Nav/Nav';

const Header = () => (
  <header className={styles.Header}>
    <Button aria-label="Button to open the menu">
      <MenuIcon></MenuIcon>
    </Button>

    <a href="." className="logo">
      <img src="" alt=""></img>
    </a>

    <Nav />
    <button mat-button>
      log-in/sign-up
    </button>
  </header>
);

export default Header;
