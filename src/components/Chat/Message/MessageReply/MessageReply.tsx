import React from "react";
import styles from "./MessageReply.module.scss";
import clsx from "clsx";
import { CloseIcon, ReplyIcon } from "../../../Icons";
import { EIconSize } from "../../../../domain/entities/icon";
import { IconButton } from "../../../Button";

export type MessageReplyProps = {
  username: string;
  text: string;
  isInProcess?: boolean;
  onClose?: () => void;
  className?: string;
};

const MessageReply: React.FC<MessageReplyProps> = ({ username, text, isInProcess, onClose, className }) => {
  return (
    <div className={clsx(styles.container, isInProcess && styles.containerInProcess, className)}>
      {isInProcess && <ReplyIcon className={styles.icon} size={EIconSize.Small} />}
      <div className={styles.wrapper}>
        <p className={styles.name}>{username}</p>
        <p className={styles.text}>{text}</p>
      </div>
      {isInProcess && (
        <div className={styles.closeWrapper}>
          <IconButton onClick={onClose} icon={<CloseIcon />} />
        </div>
      )}
    </div>
  );
};

export default MessageReply;
