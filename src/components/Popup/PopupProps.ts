import React from "react";

export enum EPopupSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
  XLarge = "xLarge",
}

export type PopupHeaderProps = {
  title: string;
};

export type PopupFooterWithActionsProps = {
  buttonLabel: string;
  secondaryButtonLabel: string;
  onButtonClick?: React.MouseEventHandler;
  onSecondaryButtonClick?: React.MouseEventHandler;
  children?: React.ReactNode;
};

export type PopupBaseProps = {
  children?: React.ReactNode;
  onClose?: () => void;
  size?: EPopupSize;
  isClosable?: boolean;
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

export type PopupProps = Omit<PopupBaseProps, "header" | "footer"> &
  PopupHeaderProps &
  PopupFooterWithActionsProps & {
    footerContent?: React.ReactNode;
  };
