import React from "react";
import styles from "./Input.module.scss";
import clsx from "clsx";
import { IconButton } from "../Button";
import { CloseIcon } from "../Icons";
import { EIconSize } from "../../domain/entities/icon";
import { InputProps, InputValue } from "../../domain/entities/field";
import { useInputLogic } from "./useInputLogic";
import { PatternFormat } from "react-number-format";

type NumberFormatInputProps = InputProps & {
  format: string;
  placeholder?: string;
  mask?: string | string[];
  isAllowed?: (value: unknown) => boolean;
};

const NumberFormatInput = React.forwardRef<HTMLInputElement, NumberFormatInputProps>(
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
      onChange,
      className,
      inputClassName,
      value,
      mask = "_",
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
        {/*@ts-ignore*/}
        <PatternFormat
          {...props}
          mask={mask}
          getInputRef={innerRef}
          disabled={isDisabled}
          value={inputValue as number}
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

NumberFormatInput.displayName = "NumberFormatInput";

export default NumberFormatInput;
