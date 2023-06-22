import React from "react";
import styles from "./ServiceChatHeader.module.scss";
import { ChatHeaderPropsBase } from "../ChatHeaderProps";
import BaseChatHeader from "../BaseChatHeader";
import { RemoteIcon } from "../../../Icons";
import { EIconSize } from "../../../../domain/entities/icon";
import ChatAvatar from "../../ChatAvatar";
import { getFullNameFromTitleAsObject } from "../../utils";

type ServiceChatHeaderProps = ChatHeaderPropsBase & {
  title: string;
  providerTitle: string;
  serviceId?: string;
  datetime?: string;
};

const ServiceChatHeader: React.FC<ServiceChatHeaderProps> = ({
  title,
  providerTitle,
  serviceId,
  datetime,
  image,
  ...props
}) => {
  return (
    <BaseChatHeader avatar={<ChatAvatar {...getFullNameFromTitleAsObject(title)} image={image} />} {...props}>
      <div className={styles.container}>
        <a className={styles.link} href="#">
          {providerTitle}
        </a>
        <div className={styles.titleWrapper}>
          <RemoteIcon size={EIconSize.Small} className={styles.icon} />
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.infoWrapper}>
          {serviceId && <span className={styles.text}>№{serviceId}</span>}
          {datetime && <span className={styles.text}>{datetime}</span>}
        </div>
      </div>
    </BaseChatHeader>
  );
};

export default ServiceChatHeader;
