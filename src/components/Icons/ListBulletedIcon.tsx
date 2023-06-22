import React, { memo } from "react";
import styles from "./Icon.module.scss";
import { IconProps } from "./IconProps";
import { EIconSize } from "../../domain/entities/icon";
import { getIconClassName } from "./getIconClassName";
import clsx from "clsx";

const ListBulletedIcon: React.FC<IconProps> = ({ size = EIconSize.Normal, className }) => (
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
      <path
        d="M7 6C7 6.82843 6.32843 7.5 5.5 7.5C4.67157 7.5 4 6.82843 4 6C4 5.17157 4.67157 4.5 5.5 4.5C6.32843 4.5 7 5.17157 7 6Z"
        fill="#121232"
      />
      <path
        d="M7 12C7 12.8284 6.32843 13.5 5.5 13.5C4.67157 13.5 4 12.8284 4 12C4 11.1716 4.67157 10.5 5.5 10.5C6.32843 10.5 7 11.1716 7 12Z"
        fill="#121232"
      />
      <path
        d="M7 18C7 18.8284 6.32843 19.5 5.5 19.5C4.67157 19.5 4 18.8284 4 18C4 17.1716 4.67157 16.5 5.5 16.5C6.32843 16.5 7 17.1716 7 18Z"
        fill="#121232"
      />
    </svg>
  </i>
);

export default memo(ListBulletedIcon);
