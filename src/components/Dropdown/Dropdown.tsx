import React, { useEffect, useRef } from "react";
import styles from "./Dropdown.module.scss";
import DropdownItem from "./DropdownItem";
import { DropdownProps } from "./DropdownProps";
import clsx from "clsx";
import placement from "placement.js";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useClickOutside = require("use-click-outside").default;

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, onClose, triggerRef, className }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onDropdownCloseHandler = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const trigger = triggerRef?.current;

    if (trigger && !trigger.contains(target)) {
      onClose?.();
    }
  };

  useClickOutside(containerRef, onDropdownCloseHandler, "mousedown");

  useEffect(() => {
    const container = containerRef.current;
    const trigger = triggerRef?.current;

    if (!trigger || !container) {
      return;
    }

    placement(trigger, container, {
      placement: "bottom-start",
    });
  }, [triggerRef, containerRef]);

  return (
    <div ref={containerRef} className={clsx(styles.container, triggerRef && styles.containerFixed, className)}>
      <ul className={styles.list}>
        {options.map((option) => (
          <li key={option.value} className={styles.listItem}>
            <DropdownItem {...option} onClick={() => onSelect?.(option)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
