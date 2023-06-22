import React from "react";
import styles from "./Radio.module.scss";
import clsx from "clsx";
import { TControlFieldProps } from "../../domain/entities/control";

type RadioProps = TControlFieldProps & {
  isError?: boolean;
  label?: string | React.ReactElement;
};

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, isDisabled, isError, isRequired, label, ...props }, ref) => {
    return (
      <label
        className={clsx(
          styles.container,
          isDisabled && styles.containerDisabled,
          isError && styles.containerError,
          className
        )}
      >
        <input ref={ref} type="radio" className={styles.input} disabled={isDisabled} {...props} />
        <div className={styles.box} />
        {!!label && (
          <span className={styles.label}>
            {label}
            {!!isRequired && <span className={styles.requiredSign}>*</span>}
          </span>
        )}
      </label>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
