import React, { memo } from "react";
import styles from "./Icon.module.scss";
import { IconProps } from "./IconProps";
import { EIconSize } from "../../domain/entities/icon";
import { getIconClassName } from "./getIconClassName";
import clsx from "clsx";

const AttachIcon: React.FC<IconProps> = ({ size = EIconSize.Normal, className }) => (
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
        d="M18 4V13.6C18 15.2974 17.3679 16.9253 16.2426 18.1255C15.1174 19.3257 13.5913 20 12 20C10.4087 20 8.88258 19.3257 7.75736 18.1255C6.63214 16.9253 6 15.2974 6 13.6L6 8.8C6 7.52696 6.47411 6.30606 7.31802 5.40589C8.16193 4.50571 9.30653 4 10.5 4C11.6935 4 12.8381 4.50571 13.682 5.40589C14.5259 6.30606 15 7.52696 15 8.8V13.6C15 14.4487 14.6839 15.2626 14.1213 15.8627C13.5587 16.4629 12.7956 16.8 12 16.8C11.2044 16.8 10.4413 16.4629 9.87868 15.8627C9.31607 15.2626 9 14.4487 9 13.6V8.8C9 8.37565 9.15804 7.96869 9.43934 7.66863C9.72064 7.36857 10.1022 7.2 10.5 7.2C10.8978 7.2 11.2794 7.36857 11.5607 7.66863C11.842 7.96869 12 8.37565 12 8.8V13.3333"
        stroke="#121232"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </i>
);

export default memo(AttachIcon);
