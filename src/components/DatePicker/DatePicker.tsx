import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import styles from "./DatePicker.module.scss";
import NumberFormatInput from "../Input/NumberFormatInput";
import { CalendarIcon } from "../Icons";
import { InputProps } from "../../domain/entities/field";
import clsx from "clsx";
import { Calendar } from "../Calendar";
import { ISelectedDate } from "../Calendar/useCalendarLogic";
import { format, isValid, parse } from "date-fns";
import { setInputElementOwnProperty } from "../../utils/setHtmlElementOwnProperty";
import { ru } from "date-fns/locale";
import placement from "placement.js";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useClickOutside = require("use-click-outside").default;

const DateFormat = "##.##.####";
const DateFormatDouble = "##.##.#### - ##.##.####";
const InitialPlaceholder = "00.00.0000";
const InitialPlaceholderDouble = "00.00.0000 - 00.00.0000";

const getParsedDate = (dateAsString: string): Date | undefined => {
  const parsedDate = parse(dateAsString, "P", new Date(), { locale: ru });

  return isValid(parsedDate) ? parsedDate : undefined;
};

const getDefaultCalendarValue = (value: string, isDouble?: boolean): ISelectedDate | undefined => {
  const valueArray = value.split(" - ");
  const startDateValue = valueArray.length > 0 ? valueArray[0] : "";
  const finishDateValue = isDouble && valueArray.length > 1 ? valueArray[1] : "";
  const startDate = getParsedDate(startDateValue);
  const finishDate = getParsedDate(finishDateValue);

  if (!startDate) {
    return undefined;
  }

  return {
    startDate,
    finishDate,
  };
};

const getFormattedDateFromCalendarValue = (value: ISelectedDate): string => {
  if (!value || !value.startDate) {
    return "";
  }
  if (!value.finishDate) {
    return format(value.startDate, "dd.MM.yyyy");
  }
  const formattedStartDate = format(value.startDate, "dd.MM.yyyy");
  const formattedFinishDate = format(value.finishDate, "dd.MM.yyyy");
  return `${formattedStartDate} - ${formattedFinishDate}`;
};

type DatePickerProps = Omit<InputProps, "isClearable" | "suffixIcon" | "isSuffixIconFilled" | "onSuffixIconClick"> & {
  isDouble?: boolean;
};

const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ isDouble, value, onFocus, onChange, inputClassName, placeholder, className, ...props }, ref) => {
    const defaultCalendarValue = value ? getDefaultCalendarValue(value as string, isDouble) : undefined;

    const innerRef = useRef<HTMLInputElement | null>(null);
    const calendarRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [dateValue, setDateValue] = useState<string>(defaultCalendarValue ? (value as string) : "");
    const [calendarValue, setCalendarValue] = useState<ISelectedDate | undefined>(defaultCalendarValue);
    const [isCalendarOpen, setCalendarOpen] = useState<boolean>(false);

    // @ts-ignore
    useImperativeHandle(ref, () => innerRef.current);

    const fieldPlaceholder = placeholder ?? (isDouble ? InitialPlaceholderDouble : InitialPlaceholder);

    const onCalendarCloseHandler = (event: MouseEvent) => {
      const container = containerRef.current;
      if (!container) {
        return;
      }

      const target = event.target as HTMLElement;
      if (isCalendarOpen && !container.contains(target)) {
        setCalendarOpen(false);
      }
    };

    useClickOutside(calendarRef, onCalendarCloseHandler, "mousedown");

    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      const { value } = event.target;
      setDateValue(value);

      if (!value) {
        setCalendarValue(undefined);
      }

      const [startDate, finishDate] = value.split(" - ");
      const parsedStartDate = getParsedDate(startDate);
      const parsedFinishDate = getParsedDate(finishDate);
      if (parsedStartDate) {
        setCalendarValue({
          startDate: parsedStartDate,
          finishDate: parsedFinishDate,
        });
      }

      onChange?.(event);
    };

    const onFocusHandler: React.FocusEventHandler<HTMLInputElement> = (event) => {
      setCalendarOpen(true);
      onFocus?.(event);
    };

    const onDateChangeHandler = (value: ISelectedDate) => {
      setCalendarValue(value);

      const inputTarget = innerRef.current;
      if (inputTarget) {
        const formattedValue = getFormattedDateFromCalendarValue(value);
        setInputElementOwnProperty(inputTarget, "value", formattedValue);
        inputTarget.dispatchEvent(new Event("change", { bubbles: true }));
      }
    };

    useEffect(() => {
      const container = containerRef.current;
      const calendar = calendarRef.current;

      if (!container || !calendar || !isCalendarOpen) {
        return;
      }

      placement(container, calendar, {
        placement: "bottom-start",
      });
    }, [containerRef, calendarRef, isCalendarOpen]);

    return (
      <div ref={containerRef} className={clsx(styles.container, isDouble && styles.containerDouble, className)}>
        <NumberFormatInput
          {...props}
          className={styles.labelContainer}
          inputClassName={clsx(styles.inputContainer, inputClassName)}
          format={isDouble ? DateFormatDouble : DateFormat}
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
          value={dateValue}
          isClearable
          isSuffixIconFilled
          placeholder={fieldPlaceholder}
          suffixIcon={!dateValue && <CalendarIcon />}
          onSuffixIconClick={() => setCalendarOpen((prevState) => !prevState)}
          ref={innerRef}
        />
        {isCalendarOpen && (
          <div ref={calendarRef} className={styles.calendarWrapper}>
            <Calendar isMultiple={isDouble} value={calendarValue} onChange={onDateChangeHandler} />
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = "DatePicker";
export default DatePicker;
