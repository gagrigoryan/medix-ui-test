import React, { memo } from "react";
import styles from "./Icon.module.scss";
import { IconProps } from "./IconProps";
import { EIconSize } from "../../domain/entities/icon";
import { getIconClassName } from "./getIconClassName";
import clsx from "clsx";

const CheckIcon: React.FC<IconProps> = ({ size = EIconSize.Normal, className }) => (
  <i className={clsx(getIconClassName(size), className)}>
    <svg className={styles.svg} width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7018 0.287649C12.0952 0.675256 12.1 1.3084 11.7124 1.70182L4.8158 8.70182C4.62785 8.89259 4.37125 9 4.10345 9C3.83565 9 3.57904 8.89259 3.3911 8.70182L0.287649 5.55182C-0.0999571 5.1584 -0.0952439 4.52526 0.298177 4.13765C0.691597 3.75004 1.32474 3.75476 1.71235 4.14818L4.10345 6.57514L10.2876 0.298177C10.6753 -0.0952439 11.3084 -0.0999571 11.7018 0.287649Z"
        fill="#121232"
      />
    </svg>
  </i>
);

export default memo(CheckIcon);
