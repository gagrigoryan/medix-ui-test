import React, { memo } from "react";
import styles from "./PopupHeader.module.scss";
import { PopupHeaderProps } from "../PopupProps";

const PopupHeader: React.FC<PopupHeaderProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default memo(PopupHeader);
