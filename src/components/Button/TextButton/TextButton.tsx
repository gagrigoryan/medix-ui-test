import React from "react";
import styles from "./TextButton.module.scss";
import { ButtonProps } from "../ButtonProps";
import BaseButton from "../BaseButton";
import clsx from "clsx";
import { EIconSize } from "../../../domain/entities/icon";

type TextButtonProps = Omit<ButtonProps, "isSmall"> & {
  icon?: React.ReactNode;
  isIconAtEnd?: boolean;
  isDecorated?: boolean;
};

const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ icon, isIconAtEnd, isDecorated = true, isLight, children, className, ...props }, ref) => {
    return (
      <BaseButton
        ref={ref}
        {...props}
        className={clsx(
          styles.textContainer,
          isDecorated && styles.textContainerDecorated,
          icon && styles.textContainerIcon,
          isIconAtEnd && styles.textContainerEnd,
          isLight && styles.textContainerLight,
          className
        )}
      >
        {icon &&
          React.cloneElement(icon as React.ReactElement, {
            size: EIconSize.XSmall,
            className: styles.icon,
          })}
        {children}
      </BaseButton>
    );
  }
);

TextButton.displayName = "TextButton";
export default TextButton;
