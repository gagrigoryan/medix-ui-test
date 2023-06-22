import React, { memo } from "react";
import styles from "./ElevationWidget.module.scss";
import clsx from "clsx";

type ElevationCardProps = {
  title: string;
  className?: string;
};

const ElevationCard: React.FC<ElevationCardProps> = ({ title, className }) => (
  <div>
    <h3 className={styles.cardTitle}>{title}</h3>
    <div className={clsx(styles.card, className)} />
  </div>
);

export default memo(ElevationCard);
