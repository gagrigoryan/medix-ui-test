import React, { memo } from "react";
import styles from "./CalendarWeekDayList.module.scss";

type CalendarWeekDayListProps = {
  weekDayNamesList: string[];
};

const CalendarWeekDayList: React.FC<CalendarWeekDayListProps> = ({ weekDayNamesList }) => {
  return (
    <ul className={styles.weekDayList}>
      {weekDayNamesList.map((weekDay) => (
        <li key={weekDay} className={styles.weekDayListItem}>
          {weekDay}
        </li>
      ))}
    </ul>
  );
};

export default memo(CalendarWeekDayList);
