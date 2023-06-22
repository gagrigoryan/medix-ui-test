import React, { useState } from "react";
import styles from "./Toggle.module.scss";
import clsx from "clsx";
import { TControlFieldProps } from "../../domain/entities/control";

type ToggleProps = TControlFieldProps & {
  isError?: boolean;
  label?: string | React.ReactElement;
};

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, isDisabled, checked, isError, isRequired, label, defaultChecked, onChange, ...props }, ref) => {
    const [isChecked, setChecked] = useState(checked != null ? checked : !!defaultChecked);

    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      const { checked } = event.target;
      setChecked(checked);
      onChange?.(event);
    };

    return (
      <label
        className={clsx(
          styles.container,
          isDisabled && styles.containerDisabled,
          isError && styles.containerError,
          className
        )}
      >
        <input
          checked={isChecked}
          onChange={onChangeHandler}
          ref={ref}
          type="checkbox"
          className={styles.input}
          disabled={isDisabled}
          {...props}
        />
        <div className={clsx(styles.toggleContainer, isChecked && styles.toggleContainerChecked)}>
          <div className={styles.switch} />
        </div>
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

Toggle.displayName = "Toggle";
export default Toggle;
