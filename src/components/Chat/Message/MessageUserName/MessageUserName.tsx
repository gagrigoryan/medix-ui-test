import React, { memo } from "react";
import styles from "./MessageUserName.module.scss";
import clsx from "clsx";

export type MessageUserNameProps = {
  name: string;
  post?: string;
  className?: string;
};

const MessageUserName: React.FC<MessageUserNameProps> = ({ name, post, className }) => {
  return (
    <div className={clsx(styles.container, className)}>
      <span className={styles.name}>{name}</span>
      {post && <span className={styles.post}>{post}</span>}
    </div>
  );
};

export default memo(MessageUserName);
