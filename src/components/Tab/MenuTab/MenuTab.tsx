import React from "react";
import styles from "./MenuTab.module.scss";
import { TabProps } from "../TabProps";
import clsx from "clsx";
import { Badge } from "../../Badge";

type MenuTabProps = TabProps & {
  isDark?: boolean;
  index?: number;
};

const MenuTab: React.FC<MenuTabProps> = ({ value, onClick, isDark, isActive, isDisabled, index, className }) => {
  return (
    <div className={clsx(styles.container, isDark && styles.containerDark, className)}>
      <button
        disabled={isDisabled}
        onClick={onClick}
        className={clsx(styles.buttonContainer, isActive && styles.buttonContainerActive)}
      >
        {value}
      </button>
      {index != null ? <Badge value={index.toString()} className={styles.badge} /> : null}
    </div>
  );
};

export default MenuTab;
