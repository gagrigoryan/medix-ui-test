import React, { memo } from "react";
import styles from "./Icon.module.scss";
import { IconProps } from "./IconProps";
import { EIconSize } from "../../domain/entities/icon";
import { getIconClassName } from "./getIconClassName";
import clsx from "clsx";

const VisibleIcon: React.FC<IconProps> = ({ size = EIconSize.Normal, className }) => (
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
        d="M10 4C5.57299 4 2.98333 7.78954 2.23103 9.07749C2.07659 9.34188 2.07659 9.65812 2.23102 9.92251C2.98333 11.2105 5.57299 15 10 15C14.427 15 17.0167 11.2105 17.769 9.92251C17.9234 9.65812 17.9234 9.34188 17.769 9.07749C17.0167 7.78954 14.427 4 10 4Z"
        stroke="#121232"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12.6667 9.5C12.6667 11.0188 11.4728 12.25 10 12.25C8.52724 12.25 7.33333 11.0188 7.33333 9.5C7.33333 7.98122 8.52724 6.75 10 6.75C11.4728 6.75 12.6667 7.98122 12.6667 9.5Z"
        stroke="#121232"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  </i>
);

export default memo(VisibleIcon);
