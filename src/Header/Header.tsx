import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import styles from './Header.module.scss';
import Nav from './Nav/Nav';
import logo from '../assets/logo.png';
import { Button, Toolbar, Hidden, Drawer, SwipeableDrawer} from '@material-ui/core';

const Header = () => {
  // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return(
    <header className={styles.Header}>
      <button onClick={handleNavToggle}>
        <MenuIcon></MenuIcon>
      </button>

      <Hidden smUp>
        <SwipeableDrawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onOpen={() => setMobileOpen(true)}
          onClose={handleNavToggle}
          disableBackdropTransition={!iOS} disableDiscovery={iOS}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          className="navSidebar"
        >
          <Nav />
        </SwipeableDrawer>
      </Hidden>

      <Hidden xsDown>
        <Drawer
          variant="permanent"
          open
          className="navSidebar"
        >
          <Nav />
        </Drawer>
      </Hidden>

      <a href="." className="logo">
        <img src={logo} alt="logo of a graph with 2 lines intersecting"></img>
      </a>

      <button mat-button>
        log-in/sign-up
      </button>
    </header>
  )
};

export default Header;
