import React from "react";

export type InputValue = string | number | readonly string[];

export enum ENumberPickerSize {
  Small = "small",
  Normal = "normal",
  Large = "large",
}

export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label: string;
  description?: string;
  error?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  suffixIcon?: React.ReactNode;
  onSuffixIconClick?: () => void;
  isSuffixIconFilled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  inputClassName?: string;
  value?: InputValue;
};
