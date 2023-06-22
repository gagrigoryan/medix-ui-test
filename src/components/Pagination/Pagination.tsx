import React, { useState } from "react";
import styles from "./Pagination.module.scss";
import clsx from "clsx";
import PaginationButton from "./PaginationButton";
import { IconButton } from "../Button";
import { ChevronLeftIcon } from "../Icons";
import { EIconSize } from "../../domain/entities/icon";
import { EPaginationItem, IPaginationItem, usePagination } from "./usePagination";

type PaginationProps = {
  totalPageCount: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
};

const getPaginationValue = ({ type, value }: IPaginationItem): string => {
  if (type === EPaginationItem.Dots) {
    return "...";
  }
  return `${value}`;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage: defaultCurrentPage,
  totalPageCount,
  onPageChange,
  className,
}) => {
  const [currentPage, setCurrentPage] = useState(defaultCurrentPage || 1);

  const paginationRange = usePagination({
    currentPage,
    totalPageCount,
    siblingCount: 2,
  });

  const onPageChangeHandler = ({ value }: IPaginationItem) => {
    if (value === currentPage) {
      return;
    }
    setCurrentPage(value);
    onPageChange?.(value);
  };

  const onPrevClickHandler = () => {
    onPageChangeHandler({ value: currentPage - 1, type: EPaginationItem.Number });
  };

  const onNextClickHandler = () => {
    onPageChangeHandler({ value: currentPage + 1, type: EPaginationItem.Number });
  };

  return (
    <div className={clsx(styles.container, className)}>
      <IconButton
        onClick={onPrevClickHandler}
        className={styles.arrowButton}
        icon={<ChevronLeftIcon size={EIconSize.Normal} />}
        isDisabled={currentPage === 1}
      />
      <ul className={styles.list}>
        {paginationRange.map((item) => (
          <li key={item.value.toString()}>
            <PaginationButton
              isActive={item.value === currentPage}
              value={getPaginationValue(item)}
              onClick={() => onPageChangeHandler(item)}
            />
          </li>
        ))}
      </ul>
      <IconButton
        onClick={onNextClickHandler}
        className={styles.arrowButtonNext}
        icon={<ChevronLeftIcon size={EIconSize.Normal} />}
        isDisabled={currentPage === totalPageCount}
      />
    </div>
  );
};

export default Pagination;
