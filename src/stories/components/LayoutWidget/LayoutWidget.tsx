import React, { memo } from "react";
import styles from "./LayoutWidget.module.scss";
import clsx from "clsx";

type LayoutWidgetProps = {
  colClassName?: string;
  startClassName?: string;
};

const LayoutWidget: React.FC<LayoutWidgetProps> = ({ colClassName, startClassName }) => {
  return (
    <div className={styles.container}>
      <div className="mx-row">
        {Array.from(Array(12).keys()).map((item) => (
          <div key={item.toString()} className={clsx(styles.gridItem, "mx-col-1")} />
        ))}
      </div>
      <div className={clsx(styles.gridMoved, "mx-row")}>
        <div className={clsx(styles.gridItemMoved, colClassName, startClassName)} />
      </div>
    </div>
  );
};

export default memo(LayoutWidget);
