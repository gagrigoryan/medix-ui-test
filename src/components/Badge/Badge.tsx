import React, { memo } from "react";
import styles from "./Badge.module.scss";
import clsx from "clsx";

type BadgeProps = {
  value: string;
  className?: string;
};

const Badge: React.FC<BadgeProps> = ({ value, className }) => {
  return (
    <div className={clsx(styles.container, className)}>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default memo(Badge);
