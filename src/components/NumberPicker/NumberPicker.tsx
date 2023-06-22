import React, { useImperativeHandle, useMemo, useRef, useState } from "react";
import styles from "./NumberPicker.module.scss";
import { Input } from "../Input";
import clsx from "clsx";
import { IconButton } from "../Button";
import { ChevronFilledIcon } from "../Icons";
import { EIconSize } from "../../domain/entities/icon";
import { ENumberPickerSize, InputProps } from "../../domain/entities/field";
import { isStringNumeric } from "../../utils/isStringNumeric";
import { setInputElementOwnProperty } from "../../utils/setHtmlElementOwnProperty";

type NumberPickerProps = Omit<InputProps, "isClearable" | "suffixIcon" | "onSuffixIconClick"> & {
  size?: ENumberPickerSize;
};

const getPickerPower = (size: ENumberPickerSize): number => {
  if (size === ENumberPickerSize.Large) {
    return 10;
  }
  if (size === ENumberPickerSize.Normal) {
    return 6;
  }
  return 3;
};

const NumberPicker = React.forwardRef<HTMLInputElement, NumberPickerProps>(
  ({ className, size = ENumberPickerSize.Normal, inputClassName, onInput, isDisabled, error, ...props }, ref) => {
    const innerRef = useRef<HTMLInputElement | null>(null);
    const [numberValue, setNumberValue] = useState<number | null>(null);

    // @ts-ignore
    useImperativeHandle(ref, () => innerRef.current);

    const pickerMaxValue = useMemo(() => Math.pow(10, getPickerPower(size)), [size]);

    const getFilteredValue = (currentValue: number) => {
      if (currentValue <= -pickerMaxValue) {
        return -pickerMaxValue + 1;
      }
      if (currentValue >= pickerMaxValue) {
        return pickerMaxValue - 1;
      }
      return currentValue;
    };

    const onInputHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      if (isStringNumeric(event.target.value)) {
        const filteredValue = getFilteredValue(+event.target.value);
        event.target.value = filteredValue.toString();
        setNumberValue(filteredValue);
      }
      onInput?.(event);
    };

    const onArrowClickHandler = (newValue: number) => {
      if (!innerRef.current) {
        return;
      }
      const inputTarget = innerRef.current;
      const filteredValue = getFilteredValue(newValue);

      setInputElementOwnProperty(inputTarget, "value", filteredValue);
      setInputElementOwnProperty(inputTarget, "valueAsNumber", filteredValue);
      inputTarget.dispatchEvent(new Event("change", { bubbles: true }));
      inputTarget.dispatchEvent(new Event("input", { bubbles: true }));
    };

    return (
      <div className={clsx(styles.container, error && styles.containerError, className)}>
        <Input
          {...props}
          placeholder="0"
          type="number"
          className={styles.labelContainer}
          inputClassName={clsx(
            styles.inputContainer,
            size === ENumberPickerSize.Small && styles.inputContainerSmall,
            size === ENumberPickerSize.Large && styles.inputContainerLarge,
            inputClassName
          )}
          error={error}
          onInput={onInputHandler}
          isClearable
          isDisabled={isDisabled}
          ref={innerRef}
        />
        <div className={styles.arrowWrapper}>
          <IconButton
            isDisabled={isDisabled}
            className={styles.arrowButton}
            icon={<ChevronFilledIcon className={styles.arrowIcon} size={EIconSize.XSmall} />}
            isIconFilled
            onClick={() => onArrowClickHandler((numberValue ?? 0) + 1)}
          />
          <IconButton
            isDisabled={isDisabled}
            className={styles.arrowButtonDown}
            icon={<ChevronFilledIcon className={styles.arrowIcon} size={EIconSize.XSmall} />}
            isIconFilled
            onClick={() => onArrowClickHandler((numberValue ?? 0) - 1)}
          />
        </div>
      </div>
    );
  }
);

NumberPicker.displayName = "NumberPicker";
export default NumberPicker;
