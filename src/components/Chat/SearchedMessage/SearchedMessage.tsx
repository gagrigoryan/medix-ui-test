import React from "react";
import styles from "./SearchedMessage.module.scss";
import ChatAvatar from "../ChatAvatar";
import MaskedText from "../MaskedText";
import clsx from "clsx";
import { getFullNameFromTitleAsObject } from "../utils";

type SearchedMessageProps = {
  title: string;
  text: string;
  time?: string;
  image?: string;
  searchedText?: string;
  className?: string;
};

const SearchedMessage: React.FC<SearchedMessageProps> = ({ title, text, searchedText, image, time, className }) => {
  return (
    <div className={clsx(styles.container, className)}>
      <ChatAvatar className={styles.avatar} {...getFullNameFromTitleAsObject(title)} image={image} />
      <div className={styles.infoWrapper}>
        <h3 className={styles.title}>Hanna Septimus</h3>
        <MaskedText
          className={styles.text}
          selectedClassName={styles.textSelected}
          searchedText={searchedText}
          value={text}
        />
      </div>
      <time className={styles.time}>{time}</time>
    </div>
  );
};

export default SearchedMessage;
