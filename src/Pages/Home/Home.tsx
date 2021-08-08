import { List } from '@material-ui/core';
import { Button, Dialog, DialogTitle, ListItem, ListItemText } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addDashboard, RootState } from '../../store';
import { Dashboard } from '../../UserData';
import styles from './Home.module.scss';
import AmountDashboard from '../../dashboard-types/AmountDashboard/AmountDashboard';
import DailyDashboard from '../../dashboard-types/DailyDashboard/DailyDashboard';

const Home = () => {
  const dashboards = useSelector((state: RootState) => state.userData.dashboards);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const newDashboard = (kind: Dashboard["kind"]) => {
    dispatch(addDashboard({ name: `default ${kind} dashboard`, kind }));
    setOpen(false);
  }

  const dashboardEls = dashboards.map(dashboard => 
    <li>
      <Link to={`/dashboard/${dashboard.id}`}>
        {dashboard.name}
      </Link>
    </li>
  )

  return (<div className={styles.Home}>
    <h1>My Dashboards</h1>
    {dashboards.length ? <ul>{dashboardEls}</ul> : <p>No dashboards to show.</p>}
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Add a new dashboard
    </Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Choose a dashboard type</DialogTitle>
      <List>
        <ListItem button onClick={() => newDashboard('amount')}>
          <ListItemText primary="Amount Dashboard" />
        </ListItem>
        <ListItem button onClick={() => newDashboard('daily')}>
          <ListItemText primary="Daily Dashboard" />
        </ListItem>
      </List>
    </Dialog>
  </div>);
};

export default Home;
