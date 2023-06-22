import { useMemo } from "react";

export enum EPaginationItem {
  Dots = "dots",
  Number = "number",
}

export interface IPaginationItem {
  value: number;
  type: EPaginationItem;
}

const getNumberValue = (value: number): IPaginationItem => ({
  type: EPaginationItem.Number,
  value,
});

const getDotsValue = (value: number): IPaginationItem => ({
  type: EPaginationItem.Dots,
  value,
});

function getRange(start: number, end: number): IPaginationItem[] {
  const paginationItemList: IPaginationItem[] = [];
  for (let value = start; value <= end; value += 1) {
    paginationItemList.push({
      type: EPaginationItem.Number,
      value,
    });
  }
  return paginationItemList;
}

type UsePaginationProps = {
  currentPage: number;
  totalPageCount: number;
  siblingCount: number;
};

type UsePaginationHook = (props: UsePaginationProps) => IPaginationItem[];

export const usePagination: UsePaginationHook = ({ currentPage, totalPageCount, siblingCount = 1 }) => {
  return useMemo(() => {
    const pageNumbers = siblingCount + 7;

    if (pageNumbers >= totalPageCount) {
      return [...getRange(1, totalPageCount)];
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    const isShowLeftDots = leftSiblingIndex > 2;
    const isShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!isShowLeftDots && isShowRightDots) {
      const leftItemCount = 1 + 2 * siblingCount;
      const leftRange = getRange(1, leftItemCount);

      return [...leftRange, getDotsValue(leftItemCount + 1), getNumberValue(totalPageCount)];
    }

    if (isShowLeftDots && !isShowRightDots) {
      const rightItemCount = 1 + 2 * siblingCount;
      const rightRange = getRange(totalPageCount - rightItemCount + 1, totalPageCount);

      return [getNumberValue(firstPageIndex), getDotsValue(totalPageCount - rightItemCount), ...rightRange];
    }

    if (isShowLeftDots && isShowRightDots) {
      const middleRange = getRange(leftSiblingIndex, rightSiblingIndex);
      return [
        getNumberValue(firstPageIndex),
        getDotsValue(leftSiblingIndex - 1),

        ...middleRange,
        getDotsValue(rightSiblingIndex + 1),
        getNumberValue(lastPageIndex),
      ];
    }
  }, [currentPage, totalPageCount, siblingCount]) as IPaginationItem[];
};
