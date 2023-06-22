import React from "react";
import styles from "./Chip.module.scss";
import clsx from "clsx";
import { BaseChipProps } from "./ChipProps";

type ChipProps = BaseChipProps & {
  isActive?: boolean;
  isDisabled?: boolean;
};

const Chip: React.FC<ChipProps> = ({ value, isActive, isDisabled, onClick, className }) => {
  return (
    <button
      className={clsx(styles.container, isActive && styles.containerActive, className)}
      disabled={isDisabled}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Chip;
