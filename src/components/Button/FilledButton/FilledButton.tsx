import React from "react";
import styles from "./FilledButton.module.scss";
import { ButtonProps } from "../ButtonProps";
import clsx from "clsx";
import BaseButton from "../BaseButton";

type FilledButtonProps = ButtonProps & {
  isColored?: boolean;
};

const FilledButton = React.forwardRef<HTMLButtonElement, FilledButtonProps>(
  ({ isLight, isColored, children, className, ...props }, ref) => {
    return (
      <BaseButton
        {...props}
        className={clsx(
          styles.filledContainer,
          isColored && styles.filledContainerColored,
          isLight && styles.filledContainerLight,
          className
        )}
        isLight={isLight}
        ref={ref}
      >
        {children}
      </BaseButton>
    );
  }
);

FilledButton.displayName = "FilledButton";
export default FilledButton;
