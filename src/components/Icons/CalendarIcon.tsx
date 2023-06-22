import React, { memo } from "react";
import styles from "./Icon.module.scss";
import { IconProps } from "./IconProps";
import { EIconSize } from "../../domain/entities/icon";
import { getIconClassName } from "./getIconClassName";
import clsx from "clsx";

const CalendarIcon: React.FC<IconProps> = ({ size = EIconSize.Normal, className }) => (
  <i className={clsx(getIconClassName(size), className)}>
    <svg
      className={styles.svg}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.25 3C7.25 2.58579 6.91421 2.25 6.5 2.25C6.08579 2.25 5.75 2.58579 5.75 3H7.25ZM14.25 3C14.25 2.58579 13.9142 2.25 13.5 2.25C13.0858 2.25 12.75 2.58579 12.75 3H14.25ZM4.75 5.48333H15.25V3.98333H4.75V5.48333ZM16.25 6.46667V14.2667H17.75V6.46667H16.25ZM15.25 15.25H4.75V16.75H15.25V15.25ZM3.75 14.2667V6.46667H2.25V14.2667H3.75ZM4.75 15.25C4.19093 15.25 3.75 14.803 3.75 14.2667H2.25C2.25 15.6449 3.37607 16.75 4.75 16.75V15.25ZM16.25 14.2667C16.25 14.803 15.8091 15.25 15.25 15.25V16.75C16.6239 16.75 17.75 15.6449 17.75 14.2667H16.25ZM15.25 5.48333C15.8091 5.48333 16.25 5.93034 16.25 6.46667H17.75C17.75 5.08841 16.6239 3.98333 15.25 3.98333V5.48333ZM4.75 3.98333C3.37607 3.98333 2.25 5.08841 2.25 6.46667H3.75C3.75 5.93034 4.19093 5.48333 4.75 5.48333V3.98333ZM5.75 3V4.73333H7.25V3H5.75ZM12.75 3V4.73333H14.25V3H12.75ZM3 8.95H17V7.45H3V8.95Z"
        fill="#121232"
      />
    </svg>
  </i>
);

export default memo(CalendarIcon);
