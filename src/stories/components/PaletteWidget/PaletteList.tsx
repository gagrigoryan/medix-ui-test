import React, { memo } from "react";
import styles from "./PaletteWidget.module.scss";
import PaletteItem from "./PaletteItem";

type PaletteList = {
  title: string;
  paletteList: string[];
};

const getCamelCase = (title: string) => title.replace(/-./g, (x) => x[1].toUpperCase());

const getClassName = (item: string) => {
  return styles[`${getCamelCase(item)}Color`];
};

const PaletteList: React.FC<PaletteList> = ({ title, paletteList }) => {
  return (
    <div>
      <h2 className={styles.listTitle}>{title}</h2>
      <ul className={styles.list}>
        {paletteList.map((item) => (
          <PaletteItem key={item} title={item} className={getClassName(item)} />
        ))}
      </ul>
    </div>
  );
};

export default memo(PaletteList);
