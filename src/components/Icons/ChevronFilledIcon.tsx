import React, { memo } from "react";
import styles from "./Icon.module.scss";
import { IconProps } from "./IconProps";
import { EIconSize } from "../../domain/entities/icon";
import { getIconClassName } from "./getIconClassName";
import clsx from "clsx";

const ChevronFilledIcon: React.FC<IconProps> = ({ size = EIconSize.Normal, className }) => (
  <i className={clsx(getIconClassName(size), className)}>
    <svg
      className={styles.svg}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3684 10C11.6239 10 11.8541 9.8671 11.9519 9.66328C12.0497 9.45946 11.9956 9.22485 11.815 9.06885L8.44659 6.15976C8.19995 5.94675 7.80005 5.94675 7.55341 6.15976L4.185 9.06885C4.00437 9.22485 3.95034 9.45946 4.04809 9.66328C4.14585 9.8671 4.37615 10 4.63159 10L11.3684 10Z"
        fill="#121232"
      />
    </svg>
  </i>
);

export default memo(ChevronFilledIcon);
