import React, { memo } from "react";
import styles from "./PaletteWidget.module.scss";
import clsx from "clsx";

type PaletteItemProps = {
  title: string;
  className?: string;
};

const getPreparedTitle = (title: string) => {
  return title.split("-").join(" ");
};

const PaletteItem: React.FC<PaletteItemProps> = ({ title, className }) => {
  return (
    <li className={clsx(styles.item, className)}>
      <p className={styles.itemTitle}>{getPreparedTitle(title)}</p>
    </li>
  );
};

export default memo(PaletteItem);
