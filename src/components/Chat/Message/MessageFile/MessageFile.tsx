import React from "react";
import styles from "./MessageFile.module.scss";
import clsx from "clsx";

export type MessageFileProps = {
  filename: string;
  previewImage: string;
  className?: string;
};

const MessageFile: React.FC<MessageFileProps> = ({ filename, previewImage, className }) => {
  return (
    <div className={clsx(styles.container, className)}>
      <figure className={styles.wrapper}>
        <img className={styles.image} src={previewImage} alt={filename} />
        <p className={styles.text}>{filename}</p>
      </figure>
    </div>
  );
};

export default MessageFile;
