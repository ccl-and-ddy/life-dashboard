import { ButtonGroup, List, ListSubheader } from '@material-ui/core';
import { Button, Dialog, DialogTitle, ListItem, ListItemText } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDashboard, editDashboard, removeDashboard, RootState } from '../../store';
import { Dashboard } from '../../UserData';
import styles from './Home.module.scss';
import AmountDashboard from '../../dashboard-types/AmountDashboard/AmountDashboard';
import DailyDashboard from '../../dashboard-types/DailyDashboard/DailyDashboard';
import { TextField } from '@material-ui/core';

const Home = () => {
  const dashboards = useSelector((state: RootState) => state.userData.dashboards);
  const dispatch = useDispatch();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const [dashboardNameInput, setDashboardNameInput] = useState('');
  const [editingDashboard, setEditingDashboard] = useState<Dashboard | null>(null);

  const openAddDashboardDialog = () => {
    setIsAddDialogOpen(true);
  };

  const openEditDashboardDialog = (dashboard: Dashboard) => {
    setEditingDashboard(dashboard);
    setDashboardNameInput(dashboard.name);
  };

  const submitDashboardEdit = () => {
    if (editingDashboard) {
      dispatch(editDashboard({...editingDashboard, name: dashboardNameInput}));
      setDashboardNameInput('');
      setEditingDashboard(null);
    }
  };

  const handleNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      setDashboardNameInput(event.target.value);
    }
  };

  const handleRemoveDashboard = (dashboard: Dashboard) => {
    dispatch(removeDashboard(dashboard));
  }

  const newDashboard = (kind: Dashboard["kind"]) => {
    dispatch(addDashboard({ name: dashboardNameInput, kind }));
    setDashboardNameInput('');
    setIsAddDialogOpen(false);
  }

  const dashboardEls = dashboards.map((dashboard) => (
    <li>
      {dashboard.name}{" "}
      <ButtonGroup color="primary" size="small" aria-label="Edit and remove dashboard button group">
        <Button onClick={() => openEditDashboardDialog(dashboard)}>Edit</Button>
        <Button onClick={() => handleRemoveDashboard(dashboard)}>Remove</Button>
      </ButtonGroup>
    </li>
  ));

  return (<div className={styles.Home}>
    <h1>My Dashboards</h1>
    {dashboards.length ? <ul>{dashboardEls}</ul> : <p>No dashboards to show.</p>}
    <Button variant="contained" color="primary" onClick={openAddDashboardDialog}>
      Add a new dashboard
    </Button>

    {/* Add Dashboard dialog */}
    <Dialog open={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)}>
      <DialogTitle>Add Dashboard</DialogTitle>
      <TextField id="add-dashboard-name" label="Dashboard Name" onChange={handleNameInputChange} />
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

    {/* Edit Dashboard dialog */}
    <Dialog open={!!editingDashboard} onClose={() => setEditingDashboard(null)}>
      <DialogTitle>Edit Dashboard</DialogTitle>
      <TextField id="edit-dashboard-name" label="Dashboard Name" value={dashboardNameInput} onChange={handleNameInputChange} />
      <Button onClick={submitDashboardEdit} disabled={!dashboardNameInput}>Submit</Button>
    </Dialog>

    <AmountDashboard />
    <DailyDashboard />
  </div>);
};

export default Home;
