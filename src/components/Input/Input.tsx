import React from "react";
import styles from "./Input.module.scss";
import clsx from "clsx";
import { IconButton } from "../Button";
import { CloseIcon } from "../Icons";
import { EIconSize } from "../../domain/entities/icon";
import { InputProps, InputValue } from "../../domain/entities/field";
import { useInputLogic } from "./useInputLogic";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      description,
      isClearable,
      isRequired,
      isDisabled,
      error,
      suffixIcon,
      isSuffixIconFilled,
      onSuffixIconClick,
      className,
      value,
      onChange,
      inputClassName,
      ...props
    },
    ref
  ) => {
    const { innerRef, inputValue, onChangeHandler, onClearHandler } = useInputLogic(
      { onChange, value: value as InputValue },
      ref
    );

    return (
      <label className={clsx(styles.container, error && styles.containerError, className)}>
        <span className={styles.label}>
          {label}
          {!!isRequired && <span className={styles.requiredSign}>*</span>}
        </span>
        <input
          {...props}
          ref={innerRef}
          disabled={isDisabled}
          value={inputValue}
          onChange={onChangeHandler}
          className={clsx(styles.input, suffixIcon && styles.inputCompressed, inputClassName)}
        />
        <small className={styles.description}>{error ?? description}</small>
        {
          <div className={styles.actionWrapper}>
            {isClearable && inputValue != null && inputValue !== "" && !isDisabled && (
              <IconButton
                isDisabled={isDisabled}
                onClick={onClearHandler}
                icon={<CloseIcon size={EIconSize.XSmall} />}
              />
            )}
            {!!suffixIcon && (
              <IconButton
                isDisabled={isDisabled}
                onClick={onSuffixIconClick}
                isIconFilled={isSuffixIconFilled}
                icon={React.cloneElement(suffixIcon as React.ReactElement, {
                  size: EIconSize.XSmall,
                })}
              />
            )}
          </div>
        }
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
