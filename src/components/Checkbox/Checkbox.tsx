import React from "react";
import styles from "./Checkbox.module.scss";
import clsx from "clsx";
import { TControlFieldProps } from "../../domain/entities/control";
import { CheckIcon } from "../Icons";
import { EIconSize } from "../../domain/entities/icon";

const Checkbox = React.forwardRef<HTMLInputElement, TControlFieldProps>(
  ({ className, isDisabled, isError, isRequired, label, ...props }, ref) => {
    return (
      <label
        className={clsx(
          styles.container,
          isDisabled && styles.containerDisabled,
          isError ? (isRequired ? styles.containerErrorRequired : styles.containerError) : "",
          className
        )}
      >
        <input disabled={isDisabled} ref={ref} type="checkbox" className={styles.input} {...props} />
        <div className={styles.box}>
          <CheckIcon className={styles.checkIcon} size={EIconSize.XSmall} />
        </div>
        <span className={styles.label}>{label}</span>
        {!!isRequired && <span className={styles.requiredSign}>*</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
