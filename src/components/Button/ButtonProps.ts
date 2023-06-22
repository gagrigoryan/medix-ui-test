import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isSmall?: boolean;
  isLight?: boolean;
  isDisabled?: boolean;
  className?: string;
};
