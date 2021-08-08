import React from 'react';
import styles from './DashboardPage.module.scss';
import AmountDashboard from '../../dashboard-types/AmountDashboard/AmountDashboard';
import DailyDashboard from '../../dashboard-types/DailyDashboard/DailyDashboard';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addDashboard, RootState } from '../../store';
import { Dashboard } from '../../UserData';


const DashboardPage = () => {
  const dashboards = useSelector((state: RootState) => state.userData.dashboards);

  // read dashboard id first = 0
  let { id } = useParams<{ id:string }>();

  // extract the right dashboard
  const currentDashboard = dashboards.find(dashboard => dashboard.id === id);
  
  if (!currentDashboard) {
    return <p>cannot find dashboard with id</p>;
  }
  
  switch (currentDashboard.kind) {
    case 'amount':
      return <AmountDashboard 
        // data={currentDashboard}
      />
    case 'daily':
      return <DailyDashboard 
        // data={currentDashboard}
      />
    default:
      return <div className={styles.DashboardPage}>Dashboard Component</div>
  }
};

export default DashboardPage;
