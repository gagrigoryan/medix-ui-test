import React from "react";
import styles from "./CalendarAction.module.scss";
import { IconButton } from "../../Button";
import { ChevronLeftLargeIcon } from "../../Icons";
import { EIconSize } from "../../../domain/entities/icon";
import { Select } from "../../Select";
import { IControlItem } from "../../../domain/entities/control";

type CalendarActionProps = {
  selectedMonth: IControlItem;
  selectedYear: IControlItem;
  onPrevIconClickHandler: () => void;
  onNextIconClickHandler: () => void;
  onMonthChangeHandler: (month: IControlItem) => void;
  onYearChangeHandler: (month: IControlItem) => void;
  monthItems: IControlItem[];
  yearItems: IControlItem[];
};

const CalendarAction: React.FC<CalendarActionProps> = ({
  selectedMonth,
  selectedYear,
  yearItems,
  monthItems,
  onPrevIconClickHandler,
  onNextIconClickHandler,
  onMonthChangeHandler,
  onYearChangeHandler,
}) => {
  return (
    <div className={styles.headerContainer}>
      <IconButton
        onClick={onPrevIconClickHandler}
        className={styles.arrowButton}
        icon={<ChevronLeftLargeIcon size={EIconSize.XSmall} />}
      />
      <div className={styles.selectWrapper}>
        <Select
          className={styles.monthContainer}
          value={selectedMonth}
          onChange={onMonthChangeHandler}
          options={monthItems}
          isDense
        />
        <Select
          className={styles.yearContainer}
          onChange={onYearChangeHandler}
          value={selectedYear}
          options={yearItems}
          isDense
        />
      </div>
      <IconButton
        onClick={onNextIconClickHandler}
        className={styles.arrowButtonNext}
        icon={<ChevronLeftLargeIcon size={EIconSize.XSmall} />}
      />
    </div>
  );
};

export default CalendarAction;
