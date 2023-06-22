import React from "react";
import styles from "./Notification.module.scss";
import { CloseIcon, ErrorIcon } from "../Icons";
import { EIconSize } from "../../domain/entities/icon";
import { IconButton, OutlinedButton } from "../Button";
import { NotificationProps } from "./NotificationProps";
import clsx from "clsx";

const Notification: React.FC<NotificationProps> = ({ text, actionText, onActionClick, onClose, className }) => {
  return (
    <div className={clsx(styles.notificationContainer, className)}>
      <ErrorIcon className={styles.icon} size={EIconSize.XSmall} />
      <p className={styles.text}>{text} eboy</p>
      {!!actionText && (
        <OutlinedButton onClick={onActionClick} isSmall isLight>
          {actionText}
        </OutlinedButton>
      )}
      {!!onClose && (
        <IconButton
          onClick={onClose}
          isLight
          icon={<CloseIcon className={styles.iconClose} size={EIconSize.XSmall} />}
        />
      )}
    </div>
  );
};

export default Notification;
