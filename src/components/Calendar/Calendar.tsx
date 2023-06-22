import React, { useMemo } from "react";
import styles from "./Calendar.module.scss";
import CalendarDayList from "./CalendarDayList";
import { CalendarService } from "./Calendar.service";
import { ru } from "date-fns/locale";
import { ISelectedDate, useCalendarLogic } from "./useCalendarLogic";
import CalendarAction from "./CalendarAction";
import CalendarWeekDayList from "./CalendarWeekDayList";

const calendarInstance = new CalendarService(ru);

type CalendarProps = {
  isMultiple?: boolean;
  value?: ISelectedDate;
  onChange?: (value: ISelectedDate) => void;
};

const Calendar: React.FC<CalendarProps> = ({ isMultiple, value, onChange }) => {
  const { selectedDate, onDateClickHandler, activeDate, ...properties } = useCalendarLogic(calendarInstance, {
    isMultiple,
    value,
    onChange,
  });

  const monthItems = useMemo(() => calendarInstance.getMonthItems(), []);
  const yearItems = useMemo(() => calendarInstance.getYearItems(), []);
  const weekDayNamesList = useMemo(() => calendarInstance.getWeekDayNames(), []);
  const monthDayList = useMemo(() => calendarInstance.getMonthDays(activeDate), [activeDate]);

  return (
    <div className={styles.container}>
      <CalendarAction {...properties} monthItems={monthItems} yearItems={yearItems} />
      <CalendarWeekDayList weekDayNamesList={weekDayNamesList} />
      <CalendarDayList
        selectedDate={selectedDate ?? undefined}
        onDateClickHandler={onDateClickHandler}
        activeDate={activeDate}
        monthDayList={monthDayList}
        isMultiple={isMultiple}
      />
    </div>
  );
};

export default Calendar;
