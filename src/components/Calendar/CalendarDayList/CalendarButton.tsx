import React from "react";
import styles from "./CalendarDayList.module.scss";
import clsx from "clsx";

type CalendarButtonProps = {
  value: number | string;
  isSelected?: boolean;
  isToday?: boolean;
  isNotAvailable?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  isMultiple?: boolean;
  isColored?: boolean;
  onClick?: () => void;
};

const CalendarButton: React.FC<CalendarButtonProps> = ({
  value,
  isSelected,
  isToday,
  isNotAvailable,
  isMultiple,
  isFirst,
  isLast,
  isColored,
  onClick,
}) => {
  return (
    <div className={clsx(styles.buttonWrapper, isMultiple && styles.buttonWrapperMultiple)}>
      <button
        onClick={onClick}
        className={clsx(
          styles.buttonContainer,
          isToday && styles.buttonContainerToday,
          isSelected && styles.buttonContainerSelected,
          isColored && !isSelected && styles.buttonContainerSelectedColored,
          isNotAvailable && styles.buttonContainerNotAvailable,
          isFirst && styles.buttonContainerFirst,
          isLast && styles.buttonContainerLast
        )}
      >
        {value}
      </button>
    </div>
  );
};

export default CalendarButton;
