import React from "react";

export enum EditorInlineStyle {
  Bold = "BOLD",
  Italic = "ITALIC",
  Underline = "UNDERLINE",
}

export enum EditorBlockType {
  OrderedList = "ordered-list-item",
  UnorderedList = "unordered-list-item",
}

export type HTMLTextAreaProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  onChange?: (value: string) => void;
  value?: string;
};

export type InputAreaProps = HTMLTextAreaProps & {
  label: string;
  placeholder?: string;
  description?: string;
  error?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  className?: string;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
};
