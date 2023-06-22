import React, { memo } from "react";
import styles from "./MessageText.module.scss";
import clsx from "clsx";

type MessageTextProps = {
  text: string;
  className?: string;
};

const MessageText: React.FC<MessageTextProps> = ({ text, className }) => {
  return <p className={clsx(styles.text, className)}>{text}</p>;
};

export default memo(MessageText);
