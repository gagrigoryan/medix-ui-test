import React from "react";
import styles from "./Popup.module.scss";
import { EPopupSize, PopupBaseProps } from "./PopupProps";
import clsx from "clsx";
import { IconButton } from "../Button";
import { CloseIcon } from "../Icons";

const popupContainerClassNames = {
  [EPopupSize.Small]: styles.popupContainerSmall,
  [EPopupSize.Medium]: styles.popupContainer,
  [EPopupSize.Large]: styles.popupContainerLarge,
  [EPopupSize.XLarge]: styles.popupContainerXLarge,
};

const PopupBase: React.FC<PopupBaseProps> = ({
  size = EPopupSize.Medium,
  header,
  footer,
  children,
  className,
  onClose,
  isClosable,
}) => {
  return (
    <div className={clsx(popupContainerClassNames[size], className)}>
      <div className={styles.popupHeader}>
        {header}
        {isClosable && <IconButton className={styles.closeButton} onClick={onClose} icon={<CloseIcon />} />}
      </div>
      <div className={styles.popupContent}>{children}</div>
      <div className={styles.popupFooter}>{footer}</div>
    </div>
  );
};

export default PopupBase;
