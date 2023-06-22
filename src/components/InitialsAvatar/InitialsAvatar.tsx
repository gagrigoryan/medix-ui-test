import React, { memo } from "react";
import styles from "./InitialsAvatar.module.scss";
import clsx from "clsx";

type InitialsAvatarProps = {
  firstname: string;
  lastname: string;
  isLight?: boolean;
  className?: string;
};

const getFirstCharacter = (value: string): string => {
  if (value.length > 0) {
    return value.charAt(0);
  }
  return "";
};

const InitialsAvatar: React.FC<InitialsAvatarProps> = ({ firstname, lastname, isLight, className }) => {
  return (
    <div className={clsx(styles.container, isLight && styles.containerLight, className)}>
      <span className={styles.text}>
        {getFirstCharacter(firstname)}
        {getFirstCharacter(lastname)}
      </span>
    </div>
  );
};

export default memo(InitialsAvatar);
