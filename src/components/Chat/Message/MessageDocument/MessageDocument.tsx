import React from "react";
import styles from "./MessageDocument.module.scss";
import clsx from "clsx";

export type MessageDocumentProps = {
  name: string;
  previewImage: string;
  size?: string;
  date?: string;
  className?: string;
};

const MessageDocument: React.FC<MessageDocumentProps> = ({ name, previewImage, size, date, className }) => {
  return (
    <div className={clsx(styles.container, className)}>
      <figure className={styles.wrapper}>
        <p className={styles.subtitle}>Extract from medical records</p>
        <img className={styles.image} src={previewImage} alt={name} />
        <p className={styles.title}>{name}</p>
        <div className={styles.infoWrapper}>
          <p className={styles.text}>{size}</p>
          <p className={styles.textDate}>{date}</p>
        </div>
      </figure>
    </div>
  );
};

export default MessageDocument;
