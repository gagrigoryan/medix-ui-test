import React, { memo } from "react";
import styles from "./MessageStatus.module.scss";
import { DeliveredIcon, ErrorIcon, SentIcon } from "../../../Icons";
import { EMessageStatus, MessageStatusProps } from "./MessageStatusProps";
import clsx from "clsx";

const MessageStatusIcon = {
  [EMessageStatus.Sent]: <SentIcon className={styles.sentIcon} />,
  [EMessageStatus.Delivered]: <DeliveredIcon className={styles.deliveredIcon} />,
  [EMessageStatus.Read]: <DeliveredIcon className={styles.icon} />,
  [EMessageStatus.Error]: <ErrorIcon className={styles.errorIcon} />,
};

const MessageStatus: React.FC<MessageStatusProps> = ({ time, status, isEdited, className }) => {
  return (
    <div className={clsx(styles.container, className)}>
      {isEdited && <span className={styles.textEdited}>Edited</span>}
      <time className={styles.text}>{time}</time>
      {status && <div className={styles.iconWrapper}>{MessageStatusIcon[status]}</div>}
    </div>
  );
};

export default memo(MessageStatus);
