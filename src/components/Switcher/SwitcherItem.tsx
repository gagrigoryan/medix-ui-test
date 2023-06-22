import React from "react";
import styles from "./Switcher.module.scss";
import clsx from "clsx";

type SwitcherItemProps = {
  label: string;
  isFirst?: boolean;
  isLast?: boolean;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
  className?: string;
};

const SwitcherItem: React.FC<SwitcherItemProps> = ({
  label,
  isFirst,
  isDisabled,
  isLast,
  onClick,
  isActive,
  className,
}) => {
  return (
    <li className={clsx(styles.switcherItem, className)}>
      <button
        className={clsx(
          styles.switcherButton,
          isActive && styles.switcherButtonActive,
          isFirst && styles.switcherButtonFirst,
          isLast && styles.switcherButtonLast
        )}
        disabled={isDisabled}
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  );
};

export default SwitcherItem;
