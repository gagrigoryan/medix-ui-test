import React from "react";
import styles from "./IconsWidget.module.scss";
import { EIconSize } from "../../../domain/entities/icon";

type IconsWidgetProps = {
  icon: React.ReactElement;
};

const IconsWidget: React.FC<IconsWidgetProps> = ({ icon }) => (
  <div className={styles.container}>
    {React.cloneElement(icon, {
      size: EIconSize.XSmall,
      className: styles.item,
    })}
    {React.cloneElement(icon, {
      size: EIconSize.Small,
      className: styles.item,
    })}
    {React.cloneElement(icon, {
      size: EIconSize.Normal,
      className: styles.item,
    })}
    {React.cloneElement(icon, {
      size: EIconSize.Large,
      className: styles.item,
    })}
  </div>
);

export default IconsWidget;
