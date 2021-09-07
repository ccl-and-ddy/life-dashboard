import React from 'react';
import { DailyDashboard } from '../../UserData';
import styles from './DailyDashboard.module.scss';

interface Props {
  data: DailyDashboard;
}

const DailyDashboardComponent = (props: Props) => (
  <main className={styles.DailyDashboard}>
    <div className="wrapper">
      <h2>{props.data.name}</h2>
      <div className="dashboardNav">
        <button>back</button>
        <h3>this month</h3>
        <button>forward</button>
        <button>calendar</button>
      </div>

      <table className="calendar">
        <tr>
          <th>sun</th>
          <th>mon</th>
          <th>tue</th>
          <th>wed</th>
          <th>thu</th>
          <th>fri</th>
          <th>sat</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
        <tr>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
        </tr>
        <tr>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
          <td>21</td>
          <td>22</td>
        </tr>
        <tr>
          <td>23</td>
          <td>24</td>
          <td>25</td>
          <td>26</td>
          <td>27</td>
          <td>28</td>
          <td>29</td>
        </tr>
        <tr>
          <td>30</td>
          <td>31</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>

      <table>
        <tr>
          <td>total this month</td>
          <td>21 hrs</td>
        </tr>
        <tr>
          <td>increase since last month</td>
          <td>+20%</td>
        </tr>
      </table>
    </div>
  </main>
);

export default DailyDashboardComponent;
