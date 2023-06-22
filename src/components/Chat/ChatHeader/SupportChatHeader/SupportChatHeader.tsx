import React from "react";
import styles from "./SupportChatHeader.module.scss";
import BaseChatHeader from "../BaseChatHeader";
import { ChatHeaderPropsBase } from "../ChatHeaderProps";
import { getFullNameFromTitleAsObject } from "../../utils";
import ChatAvatar from "../../ChatAvatar";

type SupportChatHeaderProps = ChatHeaderPropsBase & {
  title: string;
  description: string;
};

const SupportChatHeader: React.FC<SupportChatHeaderProps> = ({ title, description, image, ...props }) => {
  return (
    <BaseChatHeader avatar={<ChatAvatar {...getFullNameFromTitleAsObject(title)} image={image} />} {...props}>
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{description}</p>
      </div>
    </BaseChatHeader>
  );
};

export default SupportChatHeader;
