import React from "react";
import { DailyDashboard } from "../../UserData";
import styles from "./DailyDashboard.module.scss";
import "react-calendar/dist/Calendar.css";
import Calendar, { CalendarTileProperties, DateCallback } from "react-calendar";
import { useDispatch } from "react-redux";
import { editDashboard } from "../../store";
import dayjs from 'dayjs';

interface DailyDashboardProps {
  data: DailyDashboard;
}

const DailyDashboardComponent = ({data: dashboard}: DailyDashboardProps) => {
  const dispatch = useDispatch();

  const daysLogged: Set<string> = new Set();
  dashboard.days?.forEach(({ date }) => {
    daysLogged.add(date);
  });

  return (
    <main className={styles.DailyDashboard}>
      <div className="wrapper">
        <h2>{dashboard.name}</h2>
        <p>Click on a day to mark it completed. (Completed days are crossed out.)</p>
        <Calendar
          className={styles.calendarTile}
          tileClassName={({ date }: CalendarTileProperties) =>
            daysLogged.has(dayjs(date).format("YYYY-MM-DD")) ? styles.completedDay : null
          }
          onClickDay={(value) => {
            const stringDate = dayjs(value).format("YYYY-MM-DD");
            if (!daysLogged.has(stringDate)) {
              const newDash: DailyDashboard = {
                ...dashboard,
                days: [...dashboard.days, {date: stringDate}]
              };
              dispatch(editDashboard(newDash));
            } else {
              const newDash: DailyDashboard = {
                ...dashboard,
                days: dashboard.days.filter(({date}) => date !== stringDate)
              };
              dispatch(editDashboard(newDash));
            }
          }}
        />

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
};

export default DailyDashboardComponent;
