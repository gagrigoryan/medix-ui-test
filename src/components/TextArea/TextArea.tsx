import React from "react";
import TextareaAutosize from "react-autosize-textarea";
import styles from "./TextArea.module.scss";
import clsx from "clsx";
import { IconButton } from "../Button";
import { CloseIcon } from "../Icons";
import { EIconSize } from "../../domain/entities/icon";
import { InputValue } from "../../domain/entities/field";
import { useInputLogic } from "../Input/useInputLogic";

type TextAreaProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
  label: string;
  description?: string;
  error?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  rows?: number;
  maxRows?: number;
  className?: string;
  value?: InputValue;
};

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      description,
      rows = 1,
      maxRows = 10,
      isDisabled,
      isRequired,
      isClearable,
      error,
      onChange,
      value,
      className,
      ...props
    },
    ref
  ) => {
    const { innerRef, inputValue, onChangeHandler, onClearHandler } = useInputLogic(
      { onChange, value: value as InputValue, isTextArea: true },
      // @ts-ignore
      ref
    );

    return (
      <label
        className={clsx(
          styles.container,
          isClearable && styles.containerClearable,
          error && styles.containerError,
          className
        )}
      >
        <span className={styles.label}>
          {label}
          {!!isRequired && <span className={styles.requiredSign}>*</span>}
        </span>
        <TextareaAutosize
          value={inputValue}
          disabled={isDisabled}
          // @ts-ignore
          onChange={onChangeHandler}
          rows={rows}
          maxRows={maxRows}
          className={styles.textarea}
          // @ts-ignore
          ref={innerRef}
          {...props}
        />
        {<small className={styles.description}>{error ?? description}</small>}
        {isClearable && !isDisabled && inputValue != null && inputValue !== "" && (
          <div className={styles.actionWrapper}>
            <IconButton isDisabled={isDisabled} onClick={onClearHandler} icon={<CloseIcon size={EIconSize.XSmall} />} />
          </div>
        )}
      </label>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
