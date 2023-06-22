import React from "react";
import styles from "./IconFilledButton.module.scss";
import { ButtonProps } from "../ButtonProps";
import FilledButton from "../FilledButton";
import clsx from "clsx";

type IconFilledButtonProps = Omit<ButtonProps, "isLight"> & {
  icon: React.ReactNode;
};

const IconFilledButton = React.forwardRef<HTMLButtonElement, IconFilledButtonProps>(
  ({ icon, className, children, ...props }, ref) => {
    return (
      <FilledButton className={clsx(styles.iconFilledContainer, className)} ref={ref} {...props} isLight>
        {icon}
        {children}
      </FilledButton>
    );
  }
);

IconFilledButton.displayName = "IconFilledButton";
export default IconFilledButton;
