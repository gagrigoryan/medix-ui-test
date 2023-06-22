import React from "react";
import styles from "./MessageCard.module.scss";
import MessageText from "../MessageText";
import MessageStatus, { EMessageStatus } from "../MessageStatus";
import { IconButton } from "../../../Button";
import { StarIcon } from "../../../Icons";
import MessageDocument, { MessageDocumentProps } from "../MessageDocument";
import MessageFile, { MessageFileProps } from "../MessageFile";
import clsx from "clsx";
import MessageReply, { MessageReplyProps } from "../MessageReply";
import MessageUserName, { MessageUserNameProps } from "../MessageUserName";
import MessageAvatar, { MessageAvatarProps } from "../MessageAvatar";

type MessageCard = {
  text: string;
  time: string;
  userModel?: MessageUserNameProps & Omit<MessageAvatarProps, "alt">;
  status?: EMessageStatus;
  fileModel?: MessageFileProps;
  documentModel?: MessageDocumentProps;
  replyModel?: MessageReplyProps;
  isIncoming?: boolean;
  className?: string;
};

const MessageCard: React.FC<MessageCard> = ({
  text,
  time,
  status,
  userModel,
  fileModel,
  documentModel,
  replyModel,
  isIncoming,
  className,
}) => {
  return (
    <div className={clsx(styles.container, className)}>
      {userModel && isIncoming ? (
        <MessageAvatar className={styles.avatar} image={userModel.image} alt={userModel.name} />
      ) : null}
      <div className={clsx(styles.wrapper, isIncoming && styles.wrapperIncoming)}>
        {userModel && <MessageUserName className={styles.messageItem} {...userModel} />}
        {fileModel && <MessageFile className={styles.messageItem} {...fileModel} />}
        {documentModel && <MessageDocument className={styles.messageItem} {...documentModel} />}
        {replyModel && <MessageReply className={styles.messageItem} {...replyModel} />}
        <MessageText text={text} />
        <div className={styles.infoWrapper}>
          <IconButton className={styles.infoButton} icon={<StarIcon />} />
          <MessageStatus time={time} status={status} />
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
