import styles from './Nav.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Nav = () => {
  const dashboards = useSelector((state: RootState) => state.userData.dashboards);

  const dashboardEls = dashboards.map((dashboard) => (
    <li>
      <NavLink to={`/dashboard/${dashboard.id}`}>
        {dashboard.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className={styles.Nav}>
      <ul>
        <li>
          <NavLink to="/">home </NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        {dashboards.length ? dashboardEls : null}
      </ul>
    </nav>
  )
};

export default Nav;
