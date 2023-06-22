import { EIconSize } from "../../domain/entities/icon";
import styles from "./Icon.module.scss";

const iconClassNames = {
  [EIconSize.XSmall]: styles.iconXSmall,
  [EIconSize.Small]: styles.iconSmall,
  [EIconSize.Normal]: styles.icon,
  [EIconSize.Large]: styles.iconLarge,
};

export const getIconClassName = (size: EIconSize) => {
  return iconClassNames[size];
};
