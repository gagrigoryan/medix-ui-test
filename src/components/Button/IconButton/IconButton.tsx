import React from "react";
import styles from "./IconButton.module.scss";
import { ButtonProps } from "../ButtonProps";
import BaseButton from "../BaseButton";
import clsx from "clsx";

type IconButtonProps = Omit<ButtonProps, "isSmall"> & {
  icon: React.ReactNode;
  isRounded?: boolean;
  isIconFilled?: boolean;
};

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, isLight, isRounded, isIconFilled, className, ...props }, ref) => {
    const roundedClassName = isRounded
      ? isLight
        ? styles.iconContainerRoundedLight
        : styles.iconContainerRounded
      : "";

    return (
      <BaseButton
        ref={ref}
        {...props}
        className={clsx(
          styles.iconContainer,
          isIconFilled && styles.iconContainerFilled,
          isLight && styles.iconContainerLight,
          roundedClassName,
          className
        )}
      >
        {icon}
      </BaseButton>
    );
  }
);

IconButton.displayName = "IconButton";
export default IconButton;
