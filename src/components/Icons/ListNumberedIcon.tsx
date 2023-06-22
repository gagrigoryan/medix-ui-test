import React, { memo } from "react";
import styles from "./Icon.module.scss";
import { IconProps } from "./IconProps";
import { EIconSize } from "../../domain/entities/icon";
import { getIconClassName } from "./getIconClassName";
import clsx from "clsx";

const ListNumberedIcon: React.FC<IconProps> = ({ size = EIconSize.Normal, className }) => (
  <i className={clsx(getIconClassName(size), className)}>
    <svg
      className={styles.svg}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M20 7H9V5H20V7Z" fill="#121232" />
      <path fillRule="evenodd" clipRule="evenodd" d="M20 13H9V11H20V13Z" fill="#121232" />
      <path fillRule="evenodd" clipRule="evenodd" d="M20 19H9V17H20V19Z" fill="#121232" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 3.5H5.5V7.5H7V8.5H3V7.5H4.5V4.5H4V3.5Z" fill="#121232" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 10.5H3V9.5H7V12.5H4V13.5H7V14.5H3V11.5H6V10.5Z"
        fill="#121232"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 16.5H3V15.5H7V20.5H3V19.5H6V18.5H4V17.5H6V16.5Z"
        fill="#121232"
      />
    </svg>
  </i>
);

export default memo(ListNumberedIcon);
