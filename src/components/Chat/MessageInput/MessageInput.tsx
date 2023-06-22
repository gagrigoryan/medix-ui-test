import React from "react";
import styles from "./MessageInput.module.scss";
import { TextArea } from "../../TextArea";
import { IconButton } from "../../Button";
import { AttachIcon, PaperPlaneIcon } from "../../Icons";
import { EIconSize } from "../../../domain/entities/icon";
import clsx from "clsx";

type MessageInputProps = {
  isDisabled?: boolean;
  className?: string;
};

const MessageInput: React.FC<MessageInputProps> = ({ isDisabled, className }) => {
  if (isDisabled) {
    return (
      <div className={styles.containerDisabled}>
        <p className={styles.text}>Thank you for trusting our service. This dialogue is no longer active</p>
      </div>
    );
  }

  return (
    <div className={clsx(styles.container, className)}>
      <IconButton className={styles.attachButton} icon={<AttachIcon size={EIconSize.Small} />} />
      <TextArea className={styles.textarea} label="" placeholder="Type your message" />
      <IconButton className={styles.sendButton} isRounded isLight icon={<PaperPlaneIcon />} />
    </div>
  );
};

export default MessageInput;
