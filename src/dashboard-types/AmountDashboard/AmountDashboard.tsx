import React from 'react';
import styles from './AmountDashboard.module.scss';

const AmountDashboard = () => (
  <div className={styles.AmountDashboard}>
    <h2>(user created title) + log</h2>
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
);

export default AmountDashboard;
