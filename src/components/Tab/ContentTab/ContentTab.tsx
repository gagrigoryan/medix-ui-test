import React from "react";
import styles from "./ContentTab.module.scss";
import { TabProps } from "../TabProps";
import clsx from "clsx";

const ContentTab: React.FC<TabProps> = ({ onClick, isActive, isDisabled, value }) => {
  return (
    <div className={styles.container}>
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={clsx(styles.buttonContainer, isActive && styles.buttonContainerActive)}
      >
        {value}
      </button>
    </div>
  );
};

export default ContentTab;
