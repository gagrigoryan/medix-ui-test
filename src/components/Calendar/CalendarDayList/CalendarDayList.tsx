import React, { useMemo, useState } from "react";
import styles from "./CalendarDayList.module.scss";
import CalendarButton from "./CalendarButton";
import { format, isSameMonth, isSameDay } from "date-fns";
import { ISelectedDate } from "../useCalendarLogic";
import { getSortDates, isDateBetweenRange } from "../utils";

type CalendarDayListProps = {
  activeDate: Date;
  monthDayList: Date[][];
  selectedDate?: ISelectedDate;
  onDateClickHandler?: (date: Date) => void;
  isMultiple?: boolean;
};

const CalendarDayList: React.FC<CalendarDayListProps> = ({
  selectedDate,
  onDateClickHandler,
  activeDate,
  monthDayList,
  isMultiple,
}) => {
  const today = useMemo(() => new Date(), []);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  const onMouseEnterHandler = (date: Date) => {
    if (!isMultiple || !selectedDate?.startDate || selectedDate.finishDate) {
      return;
    }
    setHoveredDate(date);
  };

  const onMouseLeaveHandler = () => {
    setHoveredDate(null);
  };

  const checkIsDatePotentiallySelected = (date: Date): boolean => {
    if (!hoveredDate || !selectedDate?.startDate) {
      return false;
    }
    const { startDate, finishDate } = getSortDates(hoveredDate, selectedDate.startDate);
    return !!finishDate && isDateBetweenRange(date, startDate, finishDate);
  };

  const checkIsHoveredDateLast = (date: Date, isLastOfWeek: boolean): boolean => {
    const currentSelectedDate = selectedDate as ISelectedDate;
    const currentHoveredDate = hoveredDate as Date;
    if (currentSelectedDate.startDate && isSameDay(currentSelectedDate.startDate, date)) {
      return currentHoveredDate.valueOf() <= currentSelectedDate.startDate.valueOf();
    }
    if (
      isSameDay(currentHoveredDate, date) &&
      currentHoveredDate.valueOf() >= currentSelectedDate.startDate.valueOf()
    ) {
      return true;
    }
    return isLastOfWeek && (checkIsDateSelected(date) || checkIsDatePotentiallySelected(date));
  };

  const checkIsDateSelected = (date: Date): boolean => {
    if (!selectedDate) {
      return false;
    }
    if (selectedDate.finishDate && isMultiple) {
      return isDateBetweenRange(date, selectedDate.startDate, selectedDate.finishDate);
    }
    return isSameDay(date, selectedDate.startDate);
  };

  const checkIsDateFirst = (date: Date, isStartOfWeek: boolean): boolean => {
    if (!selectedDate?.startDate) {
      return false;
    }
    if (isSameDay(selectedDate.startDate, date)) {
      if (hoveredDate) {
        return hoveredDate.valueOf() >= selectedDate.startDate.valueOf();
      }
      return true;
    }
    if (hoveredDate && isSameDay(date, hoveredDate) && hoveredDate.valueOf() <= selectedDate.startDate.valueOf()) {
      return true;
    }
    return isStartOfWeek && (checkIsDateSelected(date) || checkIsDatePotentiallySelected(date));
  };

  const checkIsDateLast = (date: Date, isLastOfWeek: boolean): boolean => {
    if (hoveredDate && selectedDate?.startDate) {
      return checkIsHoveredDateLast(date, isLastOfWeek);
    }
    if (!selectedDate?.finishDate) {
      return false;
    }
    if (isSameDay(selectedDate.finishDate, date)) {
      return true;
    }
    return isLastOfWeek && checkIsDateSelected(date);
  };

  return (
    <>
      {monthDayList.map((week, weekIndex) => (
        <ul key={weekIndex.toString()} className={styles.list}>
          {week.map((date, dayIndex) => (
            <li
              key={dayIndex.toString()}
              className={styles.listItem}
              onMouseEnter={() => onMouseEnterHandler(date)}
              onMouseLeave={onMouseLeaveHandler}
            >
              <CalendarButton
                value={format(date, "d")}
                isToday={isSameDay(today, date)}
                isNotAvailable={!isSameMonth(activeDate, date)}
                isSelected={checkIsDateSelected(date)}
                onClick={() => {
                  setHoveredDate(null);
                  onDateClickHandler?.(date);
                }}
                isFirst={checkIsDateFirst(date, dayIndex === 0)}
                isLast={checkIsDateLast(date, dayIndex === 6)}
                isMultiple={isMultiple}
                isColored={checkIsDatePotentiallySelected(date)}
              />
            </li>
          ))}
        </ul>
      ))}
    </>
  );
};

export default CalendarDayList;
