import React from "react";
import styles from "./Pagination.module.scss";
import { TextButton } from "../Button";
import clsx from "clsx";

type PaginationButtonProps = {
  value: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
};

const PaginationButton: React.FC<PaginationButtonProps> = ({ value, isActive, onClick, className }) => {
  return (
    <TextButton
      onClick={onClick}
      isDecorated={false}
      className={clsx(styles.paginationButton, isActive && styles.paginationButtonActive, className)}
    >
      {value}
    </TextButton>
  );
};

export default PaginationButton;
