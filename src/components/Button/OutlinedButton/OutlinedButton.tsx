import React from "react";
import styles from "./OutlinedButton.module.scss";
import { ButtonProps } from "../ButtonProps";
import BaseButton from "../BaseButton";
import clsx from "clsx";

type OutlinedButtonProps = ButtonProps & {
  isColored?: boolean;
};

const OutlinedButton = React.forwardRef<HTMLButtonElement, OutlinedButtonProps>(
  ({ isColored, isLight, className, ...props }, ref) => {
    return (
      <BaseButton
        className={clsx(
          styles.outlinedContainer,
          isColored && styles.outlinedContainerColored,
          isLight && styles.outlinedContainerLight,
          className
        )}
        ref={ref}
        isLight={isLight}
        {...props}
      />
    );
  }
);

OutlinedButton.displayName = "OutlinedButton";

export default OutlinedButton;
