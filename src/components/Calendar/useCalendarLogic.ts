import { CalendarService } from "./Calendar.service";
import { useEffect, useState } from "react";
import { IControlItem } from "../../domain/entities/control";
import { addMonths, addYears, subMonths } from "date-fns";
import { getSortDates } from "./utils";

export interface ISelectedDate {
  startDate: Date;
  finishDate?: Date;
}

type CalendarLogicProps = {
  isMultiple?: boolean;
  value?: ISelectedDate;
  onChange?: (value: ISelectedDate) => void;
};

type CalendarLogicHook = {
  selectedDate: ISelectedDate | null;
  onDateClickHandler: (date: Date) => void;
  activeDate: Date;
  selectedMonth: IControlItem;
  selectedYear: IControlItem;
  onMonthChangeHandler: (month: IControlItem) => void;
  onYearChangeHandler: (year: IControlItem) => void;
  onPrevIconClickHandler: () => void;
  onNextIconClickHandler: () => void;
};

type UseCalendarLogicHook = (instance: CalendarService, props: CalendarLogicProps) => CalendarLogicHook;
export const useCalendarLogic: UseCalendarLogicHook = (instance, { isMultiple, value, onChange }) => {
  const [selectedDate, setSelectedDate] = useState<ISelectedDate | null>(value ?? null);
  const [activeDate, setActiveDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState<IControlItem>(
    instance.getCurrentMonthItem() ?? instance.getMonthItems()[0]
  );
  const [selectedYear, setSelectedYear] = useState<IControlItem>(
    instance.getCurrentYearItem() ?? instance.getYearItems()[0]
  );

  const onDateClickHandler = (date: Date) => {
    let currentDate = {
      startDate: date,
    };
    if (selectedDate != null && isMultiple && selectedDate.startDate && !selectedDate.finishDate) {
      currentDate = getSortDates(selectedDate.startDate, date);
    }
    setSelectedDate(currentDate);
    onChange?.(currentDate);
  };

  const onPrevIconClickHandler = () => {
    setActiveDate((prevState) => subMonths(prevState, 1));
  };

  const onNextIconClickHandler = () => {
    setActiveDate((prevState) => addMonths(prevState, 1));
  };

  const onMonthChangeHandler = (currentMonth: IControlItem) => {
    const currentMonthValue = +currentMonth.value;
    const selectedMonthValue = +selectedMonth.value;
    setSelectedMonth(currentMonth);
    setActiveDate((prevState) => addMonths(prevState, currentMonthValue - selectedMonthValue));
  };

  const onYearChangeHandler = (currentYear: IControlItem) => {
    const currentYearValue = +currentYear.value;
    const selectedYearValue = +selectedYear.value;
    setSelectedYear(currentYear);
    setActiveDate((prevState) => addYears(prevState, currentYearValue - selectedYearValue));
  };

  useEffect(() => {
    const currentMonthItem = instance.getCurrentMonthItem(activeDate);
    const currentYearItem = instance.getCurrentYearItem(activeDate);
    if (currentMonthItem) {
      setSelectedMonth(currentMonthItem);
    }
    if (currentYearItem) {
      setSelectedYear(currentYearItem);
    }
  }, [activeDate]);

  useEffect(() => {
    setSelectedDate(value ?? null);
    setActiveDate(value?.startDate ?? new Date());
  }, [value]);

  return {
    selectedDate,
    onDateClickHandler,
    activeDate,
    selectedMonth,
    selectedYear,
    onMonthChangeHandler,
    onYearChangeHandler,
    onPrevIconClickHandler,
    onNextIconClickHandler,
  };
};
