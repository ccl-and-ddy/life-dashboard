import { List } from '@material-ui/core';
import { Button, Dialog, DialogTitle, ListItem, ListItemText } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './Home.module.scss';

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (<div className={styles.Home}>
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Add a new dashboard
    </Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Choose a dashboard type</DialogTitle>
      <List>
        <ListItem button onClick={() => alert('not implemented')}>
          <ListItemText primary="Amount Dashboard" />
        </ListItem>
        <ListItem button onClick={() => alert('not implemented')}>
          <ListItemText primary="Daily Dashboard" />
        </ListItem>
      </List>
    </Dialog>
  </div>);
};

export default Home;
