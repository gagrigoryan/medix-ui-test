import React from "react";

export interface IControlItem {
  label: string;
  value: string | number;
}

export type TControlFieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string | React.ReactElement;
  isDisabled?: boolean;
  isRequired?: boolean;
  isError?: boolean;
  className?: string;
};
