import React from "react";
import styles from "./Popup.module.scss";
import clsx from "clsx";

type PopupLayoutProps = {
  children?: React.ReactNode;
  className?: string;
};

const PopupLayout: React.FC<PopupLayoutProps> = ({ children, className }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

export default PopupLayout;
