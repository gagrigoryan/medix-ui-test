import React, { memo } from "react";
import styles from "./Icon.module.scss";
import { IconProps } from "./IconProps";
import { EIconSize } from "../../domain/entities/icon";
import { getIconClassName } from "./getIconClassName";
import clsx from "clsx";

const FontItalicIcon: React.FC<IconProps> = ({ size = EIconSize.Normal, className }) => (
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
        d="M13.0354 17.6726L12.9381 18H8L8.12389 17.6726C8.61947 17.6608 8.9469 17.6195 9.10619 17.5487C9.36578 17.4484 9.55752 17.3097 9.68142 17.1327C9.87611 16.8555 10.0767 16.3599 10.2832 15.646L12.3717 8.40708C12.5487 7.80531 12.6372 7.35103 12.6372 7.04425C12.6372 6.89086 12.5988 6.76106 12.5221 6.65487C12.4454 6.54867 12.3274 6.46903 12.1681 6.41593C12.0147 6.35693 11.7109 6.32743 11.2566 6.32743L11.3628 6H16L15.9027 6.32743C15.5251 6.32153 15.2448 6.36283 15.0619 6.45133C14.7965 6.56932 14.5929 6.73746 14.4513 6.95575C14.3156 7.17404 14.1386 7.65782 13.9204 8.40708L11.8407 15.646C11.6519 16.3127 11.5575 16.7375 11.5575 16.9204C11.5575 17.0678 11.5929 17.1947 11.6637 17.3009C11.7404 17.4012 11.8584 17.4808 12.0177 17.5398C12.1829 17.5929 12.5221 17.6372 13.0354 17.6726Z"
        fill="#121232"
      />
    </svg>
  </i>
);

export default memo(FontItalicIcon);
