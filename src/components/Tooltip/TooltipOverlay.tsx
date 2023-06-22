import React from "react";
import styles from "./Tooltip.module.scss";

type TooltipOverlay = {
  text: string;
};

const TooltipOverlay: React.FC<TooltipOverlay> = ({ text }) => {
  return <span className={styles.tooltipContainer}>{text}</span>;
};

export default TooltipOverlay;
