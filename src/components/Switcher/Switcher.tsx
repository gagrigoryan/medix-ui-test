import React, { useState } from "react";
import styles from "./Switcher.module.scss";
import { IControlItem } from "../../domain/entities/control";
import clsx from "clsx";
import SwitcherItem from "./SwitcherItem";

type SwitcherProps = {
  items: IControlItem[];
  defaultActiveItem?: IControlItem;
  isDisabled?: boolean;
  onChange?: (item: IControlItem) => void;
  className?: string;
};

const Switcher: React.FC<SwitcherProps> = ({ items, isDisabled, defaultActiveItem, onChange, className }) => {
  const [activeItem, setActiveItem] = useState<IControlItem | null>(defaultActiveItem ?? null);

  const onItemClickHandler = (item: IControlItem) => {
    if (item.value === activeItem?.value) {
      return;
    }
    setActiveItem(item);
    onChange?.(item);
  };

  return (
    <div className={clsx(styles.switcherContainer, className)}>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <SwitcherItem
            key={item.value}
            isFirst={index === 0}
            isLast={index === items.length - 1}
            isActive={item.value === activeItem?.value}
            onClick={() => onItemClickHandler(item)}
            isDisabled={isDisabled}
            {...item}
          />
        ))}
      </ul>
    </div>
  );
};

export default Switcher;
