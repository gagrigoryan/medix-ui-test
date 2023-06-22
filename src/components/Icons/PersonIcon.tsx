import React, { memo } from "react";
import styles from "./Icon.module.scss";
import { IconProps } from "./IconProps";
import { EIconSize } from "../../domain/entities/icon";
import { getIconClassName } from "./getIconClassName";
import clsx from "clsx";

const PersonIcon: React.FC<IconProps> = ({ size = EIconSize.Normal, className }) => (
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
        d="M20 21C19.3446 19.4109 18.2347 18.0528 16.8108 17.0972C15.3868 16.1416 13.7126 15.6316 12 15.6316C10.2874 15.6316 8.61323 16.1416 7.18924 17.0972C5.76525 18.0528 4.65539 19.4109 4 21M8.25589 9.44328C8.07103 8.94837 7.98482 8.42164 8.00219 7.89319C8.01956 7.36474 8.14016 6.8449 8.35712 6.36336C8.57407 5.88182 8.88313 5.44801 9.26664 5.0867C9.65015 4.72539 10.1006 4.44365 10.5923 4.25757C11.084 4.07149 11.6073 3.98472 12.1323 4.0022C12.6573 4.01968 13.1737 4.14108 13.6521 4.35946C14.1305 4.57785 14.5614 4.88894 14.9204 5.27497C15.2793 5.66101 15.5592 6.11443 15.7441 6.60935C15.929 7.10427 16.0152 7.63099 15.9978 8.15944C15.9804 8.6879 15.8598 9.20773 15.6429 9.68927C15.4259 10.1708 15.1169 10.6046 14.7334 10.9659C14.3498 11.3272 13.8994 11.609 13.4077 11.7951C12.916 11.9811 12.3927 12.0679 11.8677 12.0504C11.3427 12.0329 10.8263 11.9115 10.3479 11.6932C9.86952 11.4748 9.43855 11.1637 9.0796 10.7777C8.72065 10.3916 8.44075 9.9382 8.25589 9.44328Z"
        stroke="#121232"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </i>
);

export default memo(PersonIcon);
