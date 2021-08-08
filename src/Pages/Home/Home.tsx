import { List, ListSubheader } from '@material-ui/core';
import { Button, Dialog, DialogTitle, ListItem, ListItemText } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDashboard, RootState } from '../../store';
import { Dashboard } from '../../UserData';
import styles from './Home.module.scss';
import AmountDashboard from '../../dashboard-types/AmountDashboard/AmountDashboard';
import DailyDashboard from '../../dashboard-types/DailyDashboard/DailyDashboard';
import { TextField } from '@material-ui/core';

const Home = () => {
  const dashboards = useSelector((state: RootState) => state.userData.dashboards);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [dashboardName, setDashboardName] = useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target?.value) {
      setDashboardName(event.target?.value);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const newDashboard = (kind: Dashboard["kind"]) => {
    dispatch(addDashboard({ name: dashboardName, kind }));
    setDashboardName('');
    setOpen(false);
  }

  const dashboardEls = dashboards.map(dashboard => <li>{dashboard.name}</li>)

  return (<div className={styles.Home}>
    <h1>My Dashboards</h1>
    {dashboards.length ? <ul>{dashboardEls}</ul> : <p>No dashboards to show.</p>}
    <Button variant="contained" color="primary" onClick={handleClickOpen}>
      Add a new dashboard
    </Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Dashboard</DialogTitle>
      <TextField id="dashboard-name" label="Dashboard Name" onChange={handleNameChange} />
      <List>
        <ListSubheader>Dashboard Type</ListSubheader>
        <ListItem button onClick={() => newDashboard('amount')}>
          <ListItemText primary="Amount Dashboard" />
        </ListItem>
        <ListItem button onClick={() => newDashboard('daily')}>
          <ListItemText primary="Daily Dashboard" />
        </ListItem>
      </List>
    </Dialog>

    <AmountDashboard />
    <DailyDashboard />
  </div>);
};

export default Home;
