import React from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "./ButtonProps";
import clsx from "clsx";

const BaseButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, isDisabled, isLight, isSmall, className, ...props }, ref) => {
    return (
      <button
        {...props}
        className={clsx(
          styles.container,
          isSmall && styles.containerSmall,
          isLight && styles.containerLight,
          className
        )}
        disabled={isDisabled}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

BaseButton.displayName = "BaseButton";
export default BaseButton;
