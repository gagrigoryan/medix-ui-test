import React from "react";
import styles from "./Dropdown.module.scss";
import { IDropdownItem } from "./DropdownProps";

type DropdownItemProps = IDropdownItem & {
  onClick?: () => void;
};

const DropdownItem: React.FC<DropdownItemProps> = ({ label, icon, onClick }) => {
  return (
    <button onClick={onClick} className={styles.dropdownItem}>
      {icon}
      <span className={styles.dropdownItemValue}>{label}</span>
    </button>
  );
};

export default DropdownItem;
