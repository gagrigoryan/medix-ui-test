import React, { memo } from "react";
import styles from "./Icon.module.scss";
import { IconProps } from "./IconProps";
import { EIconSize } from "../../domain/entities/icon";
import { getIconClassName } from "./getIconClassName";
import clsx from "clsx";

const StarIcon: React.FC<IconProps> = ({ size = EIconSize.Normal, className }) => (
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
        d="M9.99198 2.00612C9.99451 1.99796 10.0055 1.99796 10.008 2.00612L11.8908 8.09854C11.8919 8.1022 11.8951 8.10467 11.8988 8.10467H17.9916C17.9997 8.10467 18.0031 8.11566 17.9965 8.1207L13.0674 11.886C13.0644 11.8883 13.0632 11.8923 13.0643 11.8959L14.9471 17.9884C14.9496 17.9965 14.9407 18.0033 14.9341 17.9983L10.005 14.2329C10.002 14.2307 9.998 14.2307 9.99504 14.2329L5.0659 17.9983C5.0593 18.0033 5.05041 17.9965 5.05293 17.9884L6.93569 11.8959C6.93682 11.8923 6.93559 11.8883 6.93263 11.886L2.00349 8.1207C1.99688 8.11566 2.00028 8.10467 2.00845 8.10467H8.1012C8.10485 8.10467 8.10809 8.1022 8.10922 8.09855L9.99198 2.00612Z"
        stroke="#121232"
        strokeWidth="1.5"
      />
    </svg>
  </i>
);

export default memo(StarIcon);
