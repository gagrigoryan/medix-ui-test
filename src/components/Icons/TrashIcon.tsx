import React, { memo } from "react";
import styles from "./Icon.module.scss";
import { IconProps } from "./IconProps";
import { EIconSize } from "../../domain/entities/icon";
import { getIconClassName } from "./getIconClassName";
import clsx from "clsx";

const TrashIcon: React.FC<IconProps> = ({ size = EIconSize.Normal, className }) => (
  <i className={clsx(getIconClassName(size), className)}>
    <svg
      className={styles.svg}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.66667 6.66667V18.3333C5.66667 19.8061 6.86057 21 8.33333 21H15.6667C17.1394 21 18.3333 19.8061 18.3333 18.3333V6.66667M5.66667 6.66667H3M5.66667 6.66667H18.3333M18.3333 6.66667H21M8 3H16M10 11.3333V16.3333M14 11.3333V16.3333"
        stroke="#121232"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </i>
);

export default memo(TrashIcon);
