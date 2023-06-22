import React from "react";
import styles from "./InfoChip.module.scss";
import { BaseChipProps } from "../ChipProps";
import clsx from "clsx";
import { IconButton } from "../../Button";

type InfoChipProps = BaseChipProps & {
  icon?: React.ReactNode;
  isSmall?: boolean;
};

const InfoChipIcon: React.FC<InfoChipProps> = ({ value, isSmall, icon, className }) => (
  <span
    className={clsx(
      styles.infoContainer,
      styles.infoContainerIcon,
      isSmall && styles.infoContainerIconSmall,
      className
    )}
  >
    {icon}
    {value}
  </span>
);

const InfoChipClickable: React.FC<InfoChipProps> = ({ value, isSmall, icon, onClick, className }) => (
  <span
    className={clsx(
      styles.infoContainer,
      styles.infoContainerClicked,
      isSmall && styles.infoContainerClickedSmall,
      className
    )}
  >
    {value}
    <IconButton className={styles.icon} icon={icon} onClick={onClick} />
  </span>
);

const InfoChip: React.FC<InfoChipProps> = ({ value, icon, isSmall, onClick, className }) => {
  if (icon) {
    return onClick ? (
      <InfoChipClickable value={value} icon={icon} isSmall={isSmall} onClick={onClick} className={className} />
    ) : (
      <InfoChipIcon value={value} icon={icon} isSmall={isSmall} className={className} />
    );
  }

  return <span className={clsx(styles.infoContainer, isSmall && styles.infoContainerSmall, className)}>{value}</span>;
};

export default InfoChip;
