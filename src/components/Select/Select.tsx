import React, { useRef } from "react";
import styles from "./Select.module.scss";
import {
  ControlComponent,
  DropdownMenuComponent,
  IndicatorComponent,
  OptionComponent,
  ValueContainerComponent,
  PlaceholderComponent,
} from "./DropdownComponents";
import { getSelectStyles } from "./utils";
import { IControlItem } from "../../domain/entities/control";
import clsx from "clsx";
import { ControlProps } from "react-select";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ReactSelect = require("react-select").default;

type SelectProps = {
  options: IControlItem[];
  defaultOption?: IControlItem;
  onSelect?: (value: any) => void;
  onChange?: (value: any) => void;
  onBlur?: () => void;
  placeholder?: string;
  label?: string;
  description?: string;
  error?: string;
  isDense?: boolean;
  onInputChange?: (newValue: string) => void;
  isSearchable?: boolean;
  isDisabled?: boolean;
  className?: string;
  value?: IControlItem;
  inputRef?: React.Ref<any>;
};

const Select: React.FC<SelectProps> = ({
  label,
  description,
  error,
  isDense,
  isSearchable = false,
  isDisabled,
  className,
  onChange,
  ...props
}) => {
  const selectRef = useRef<any | null>(null);
  const selectStyles = getSelectStyles();

  const onChangeHandler = (newValue: unknown) => {
    const select = selectRef.current;
    if (select) {
      setTimeout(() => {
        select.blur?.();
      });
    }
    onChange?.(newValue);
  };

  return (
    <label
      className={clsx(
        styles.container,
        error && styles.containerError,
        isDense && styles.containerDense,
        isDisabled && styles.containerDisabled,
        className
      )}
    >
      <span className={styles.label}>{label}</span>
      <ReactSelect
        ref={selectRef}
        {...props}
        onChange={onChangeHandler}
        components={{
          IndicatorSeparator: null,
          Control: (props: ControlProps) => <ControlComponent {...props} isError={!!error} />,
          Menu: DropdownMenuComponent,
          IndicatorsContainer: IndicatorComponent,
          Option: OptionComponent,
          ValueContainer: ValueContainerComponent,
          Placeholder: PlaceholderComponent,
        }}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        styles={selectStyles}
      />
      <small className={styles.description}>{error ?? description}</small>
    </label>
  );
};

export default Select;
