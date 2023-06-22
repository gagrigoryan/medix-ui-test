import React, { memo } from "react";
import styles from "./Icon.module.scss";
import { IconProps } from "./IconProps";
import { EIconSize } from "../../domain/entities/icon";
import { getIconClassName } from "./getIconClassName";
import clsx from "clsx";

const RotateIcon: React.FC<IconProps> = ({ size = EIconSize.Normal, className }) => (
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
        d="M19.6468 16.6887C19.8565 16.3315 19.7369 15.8719 19.3796 15.6622C19.0224 15.4526 18.5628 15.5722 18.3532 15.9294L19.6468 16.6887ZM8.75221 19.0101L9.12259 18.3579L8.75221 19.0101ZM6.00632 8.92959L6.65314 9.30923L6.00632 8.92959ZM15.8837 6.88069C16.2439 7.08525 16.7017 6.95909 16.9063 6.59891C17.1108 6.23873 16.9847 5.78092 16.6245 5.57636L15.8837 6.88069ZM13.1405 7.3049C12.7458 7.43057 12.5277 7.85241 12.6534 8.2471C12.7791 8.64179 13.2009 8.85987 13.5956 8.7342L13.1405 7.3049ZM17.2231 6.79212L17.4506 7.50677C17.6414 7.44605 17.7999 7.31159 17.891 7.13335C17.982 6.9551 17.9981 6.74784 17.9355 6.5577L17.2231 6.79212ZM16.6877 2.76558C16.5582 2.37212 16.1343 2.15811 15.7409 2.28758C15.3474 2.41705 15.1334 2.84096 15.2629 3.23442L16.6877 2.76558ZM18.3532 15.9294C16.492 19.1004 12.3591 20.196 9.12259 18.3579L8.38182 19.6623C12.3215 21.8997 17.3648 20.5768 19.6468 16.6887L18.3532 15.9294ZM9.12259 18.3579C5.89312 16.5238 4.79633 12.4728 6.65314 9.30923L5.3595 8.54996C3.07312 12.4454 4.43508 17.4208 8.38182 19.6623L9.12259 18.3579ZM6.65314 9.30923C8.5143 6.13823 12.6472 5.04259 15.8837 6.88069L16.6245 5.57636C12.6848 3.33891 7.64153 4.66188 5.3595 8.54996L6.65314 9.30923ZM13.5956 8.7342L17.4506 7.50677L16.9956 6.07747L13.1405 7.3049L13.5956 8.7342ZM17.9355 6.5577L16.6877 2.76558L15.2629 3.23442L16.5107 7.02655L17.9355 6.5577Z"
        fill="#121232"
      />
    </svg>
  </i>
);

export default memo(RotateIcon);
