import React, { memo } from "react";
import styles from "./Icon.module.scss";
import { IconProps } from "./IconProps";
import { EIconSize } from "../../domain/entities/icon";
import { getIconClassName } from "./getIconClassName";
import clsx from "clsx";

const ReplyIcon: React.FC<IconProps> = ({ size = EIconSize.Normal, className }) => (
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
        d="M10.8879 3V8.33333C16.5 8.33333 21 11 21 21C21 15.5 14.5 13.3704 10.8879 13.3704V19L3 11L10.8879 3Z"
        stroke="#121232"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  </i>
);

export default memo(ReplyIcon);
