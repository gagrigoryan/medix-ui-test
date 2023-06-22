import React from "react";
import styles from "./Select.module.scss";
import {
  components,
  ControlProps,
  IndicatorsContainerProps,
  MenuProps,
  OptionProps,
  PlaceholderProps,
  ValueContainerProps,
} from "react-select";
import clsx from "clsx";
import { ChevronLeftLargeIcon } from "../Icons";
import { EIconSize } from "../../domain/entities/icon";
import { IconButton } from "../Button";

type ControlComponentProps = ControlProps & {
  isError?: boolean;
};

export const IndicatorComponent: React.FC<Omit<IndicatorsContainerProps, "children">> = ({ ...props }) => {
  return (
    <components.IndicatorsContainer {...props}>
      <div className={styles.dropdownIndicatorIconContainer}>
        <IconButton
          isDisabled={props.isDisabled}
          icon={<ChevronLeftLargeIcon className={styles.arrowIcon} size={EIconSize.XSmall} />}
        />
      </div>
    </components.IndicatorsContainer>
  );
};

export const ControlComponent: React.FC<ControlComponentProps> = ({ isError, ...props }) => {
  return (
    <components.Control
      {...props}
      className={clsx(
        styles.controlContainer,
        props.isFocused && styles.controlContainerFocused,
        isError && styles.controlContainerError
      )}
    />
  );
};

export const DropdownMenuComponent: React.FC<MenuProps> = ({ children, ...props }) => {
  return (
    <components.Menu {...props} className={styles.menuContainer}>
      {children}
    </components.Menu>
  );
};

export const OptionComponent: React.FC<OptionProps> = ({ ...props }) => {
  return (
    <components.Option
      className={clsx(
        styles.optionContainer,
        props.isFocused && styles.optionContainerFocused,
        props.isSelected && styles.optionContainerSelected
      )}
      {...props}
    />
  );
};

export const ValueContainerComponent: React.FC<ValueContainerProps> = ({ ...props }) => {
  return <components.ValueContainer {...props} className={styles.valueContainer} />;
};

export const PlaceholderComponent: React.FC<PlaceholderProps> = ({ ...props }) => {
  return <components.Placeholder {...props} className={styles.placeholderContainer} />;
};
