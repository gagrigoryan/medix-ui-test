import React from "react";

export interface IDropdownItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export type DropdownProps = {
  options: IDropdownItem[];
  onSelect?: (item: IDropdownItem) => void;
  onClose?: () => void;
  triggerRef?: React.MutableRefObject<HTMLElement | null>;
  className?: string;
};
