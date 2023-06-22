import React, { ComponentProps } from "react";
import styles from "./MessageCardWidget.module.scss";
import { EMessageStatus, MessageCard } from "../../../components";

const userModel = {
  name: "Alice Cuddy",
  post: "MD",
  image:
    "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=914&q=80",
};

const replyModel = {
  username: "Alice Cuddy",
  text: "I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
};

const fileModel = {
  filename: "File with long very name 01.pdf",
  previewImage:
    "https://images.unsplash.com/photo-1566396223585-c8fbf7fa6b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1849&q=80",
};

const documentModel = {
  name: "Hepatitis C virus antibody test (ELISA)",
  previewImage:
    "https://images.unsplash.com/photo-1543769657-fcf1236421bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80",
  date: "03.31.2022",
  size: "3,2 MB",
};

const messageProps = {
  text: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
  time: "10:49 pm",
  status: EMessageStatus.Delivered,
};

type MessageCardWidgetProps = {
  withFile?: boolean;
  withDocument?: boolean;
  withReply?: boolean;
  withUser?: boolean;
};

const MessageCardWidget: React.FC<MessageCardWidgetProps> = ({ withUser, withFile, withDocument, withReply }) => {
  const props: ComponentProps<typeof MessageCard> = {
    ...messageProps,
    replyModel: withReply ? replyModel : undefined,
    fileModel: withFile ? fileModel : undefined,
    documentModel: withDocument ? documentModel : undefined,
    userModel: withUser ? userModel : undefined,
  };

  return (
    <div className={styles.container}>
      <MessageCard className={styles.card} {...props} />
      <MessageCard className={styles.card} {...props} isIncoming />
    </div>
  );
};

export default MessageCardWidget;
