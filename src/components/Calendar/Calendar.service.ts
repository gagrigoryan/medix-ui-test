import { Locale } from "date-fns";
import { enUS } from "date-fns/locale";
import { IControlItem } from "../../domain/entities/control";
import { getDaysOfMonth, getMonthItems, getWeekDayNames, getYearItems } from "./utils";

export class CalendarService {
  private readonly _locale: Locale = enUS;
  private readonly _monthItems: IControlItem[];
  private readonly _yearItems: IControlItem[];

  constructor(locale: Locale) {
    this._locale = locale;
    this._monthItems = getMonthItems(locale);
    this._yearItems = getYearItems();
  }

  getLocale(): Locale {
    return this._locale;
  }

  getWeekDayNames(): string[] {
    return getWeekDayNames(this._locale);
  }

  getMonthDays(date: Date): Date[][] {
    return getDaysOfMonth(date, this._locale);
  }

  getMonthItems(): IControlItem[] {
    return this._monthItems;
  }

  getYearItems(): IControlItem[] {
    return this._yearItems;
  }

  getCurrentMonthItem(date: Date = new Date()): IControlItem | undefined {
    const currentMonth = date.getMonth();
    return this._monthItems.find((monthItem) => monthItem.value === currentMonth);
  }

  getCurrentYearItem(date: Date = new Date()): IControlItem | undefined {
    const currentYear = date.getFullYear();
    return this._yearItems.find((yearItem) => yearItem.value === currentYear);
  }
}
