import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
  startOfYear,
  Locale,
} from "date-fns";
import { IControlItem } from "../../domain/entities/control";
import { ISelectedDate } from "./useCalendarLogic";

export const getWeekDayNames = (locale?: Locale) => {
  const firstDayOfWeek = startOfWeek(new Date(), locale && { locale });
  const shortWeekDaysArray = Array.from(Array(7)).map((e, index) =>
    format(addDays(firstDayOfWeek, index), "EEEEEE", locale && { locale })
  );
  return shortWeekDaysArray;
};

export const getMontNames = (locale?: Locale): string[] => {
  const firstDayOfYear = startOfYear(new Date());
  const monthNames = Array.from(Array(12)).map((_, index) =>
    format(addMonths(firstDayOfYear, index), "LLLL", locale && { locale })
  );

  return monthNames;
};

export const getMonthItems = (locale?: Locale): IControlItem[] => {
  return getMontNames(locale).map((monthName, index) => ({
    value: index,
    label: monthName,
  }));
};

export const getYearItems = (): IControlItem[] => {
  const firstYear = new Date().getFullYear() - 10;
  return Array.from({ length: 21 }, (_, i) => ({
    value: i + firstYear,
    label: (i + firstYear).toString(),
  }));
};

const getWeekDays = (startDate: Date): Date[] => {
  const result: Date[] = [];
  let currentDate = startDate;

  for (let index = 0; index < 7; ++index) {
    result.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }

  return result;
};

export const getDaysOfMonth = (activeDate: Date, locale?: Locale): Date[][] => {
  const result: Date[][] = [];
  const startOfTheSelectedMonth = startOfMonth(activeDate);
  const endOfTheSelectedMonth = endOfMonth(activeDate);
  const startDate = startOfWeek(startOfTheSelectedMonth, locale && { locale });
  const endDate = endOfWeek(endOfTheSelectedMonth, locale && { locale });

  let currentDate = startDate;

  while (currentDate <= endDate) {
    result.push(getWeekDays(currentDate));
    currentDate = addDays(currentDate, 7);
  }

  return result;
};

export const isDateBetweenRange = (currentDate: Date, startDate: Date, finishDate: Date): boolean => {
  return currentDate.valueOf() >= startDate.valueOf() && currentDate.valueOf() <= finishDate.valueOf();
};

export const getSortDates = (dateFirst: Date, dateSecond: Date): ISelectedDate => {
  const sortedDatesList = [dateFirst, dateSecond].sort((a, b) => a.valueOf() - b.valueOf());
  return {
    startDate: sortedDatesList[0],
    finishDate: sortedDatesList[1],
  };
};
