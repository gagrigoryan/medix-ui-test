import React, { memo } from "react";
import styles from "./ElevationWidget.module.scss";
import ElevationCard from "./ElevationCard";

const ElevationWidget: React.FC = () => {
  return (
    <div className={styles.container}>
      <ElevationCard title="UI Main" className="mx-elevation-main" />
      <ElevationCard title="Hover & Hint" className="mx-elevation-hint" />
      <ElevationCard title="Dropdown & MW" className="mx-elevation-dropdown" />
      <ElevationCard title="Raised" className="mx-elevation-raised" />
    </div>
  );
};

export default memo(ElevationWidget);
