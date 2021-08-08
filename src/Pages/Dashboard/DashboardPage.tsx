import styles from './DashboardPage.module.scss';
import AmountDashboard from '../../dashboard-types/AmountDashboard/AmountDashboard';
import DailyDashboard from '../../dashboard-types/DailyDashboard/DailyDashboard';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';


const DashboardPage = () => {
  const { id } = useParams<{ id:string }>();
  const dashboards = useSelector((state: RootState) => state.userData.dashboards);
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
