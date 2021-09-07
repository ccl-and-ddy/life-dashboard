import React from 'react';
import styles from './AmountDashboard.module.scss';
import { AmountDashboard } from '../../UserData';

interface Props {
  data: AmountDashboard;
}

const AmountDashboardComponent = (props: Props) => (
  <main className={styles.AmountDashboard}>
    <div className="wrapper">
      <h2>{props.data.name}</h2>
      <div className="dashboardNav">
        <button>back</button>
        <h3>this week</h3>
        <button>forward</button>
        <button>calendar</button>
      </div>

      <figure>
        <figcaption>graph</figcaption>
      </figure>

      <button>add run</button>

      <table>
        <tr>
          <td>total this week</td>
          <td>21 hrs</td>
        </tr>
        <tr>
          <td>increase since last week</td>
          <td>+20%</td>
        </tr>
        <tr>
          <td>average per day</td>
          <td>3 hrs</td>
        </tr>
      </table>
    </div>
  </main>
);

export default AmountDashboardComponent;
