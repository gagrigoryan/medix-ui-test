import React, { memo } from "react";
import styles from "./Icon.module.scss";
import { IconProps } from "./IconProps";
import { EIconSize } from "../../domain/entities/icon";
import { getIconClassName } from "./getIconClassName";
import clsx from "clsx";

const ErrorIcon: React.FC<IconProps> = ({ size = EIconSize.Normal, className }) => (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10 12.25C10.4142 12.25 10.75 12.5858 10.75 13V13.01C10.75 13.4242 10.4142 13.76 10 13.76C9.58579 13.76 9.25 13.4242 9.25 13.01V13C9.25 12.5858 9.58579 12.25 10 12.25ZM10.75 7C10.75 6.58579 10.4142 6.25 10 6.25C9.58579 6.25 9.25 6.58579 9.25 7V10.5C9.25 10.9142 9.58579 11.25 10 11.25C10.4142 11.25 10.75 10.9142 10.75 10.5V7Z"
        fill="#121232"
      />
    </svg>
  </i>
);

export default memo(ErrorIcon);
