import React from "react";
import styles from "./ServiceDialogueCard.module.scss";
import BaseDialogueCard from "../BaseDialogueCard";
import { DialogueCardPropsBase } from "../DialogueCardProps";
import { RemoteIcon } from "../../../Icons";
import { EIconSize } from "../../../../domain/entities/icon";
import ChatAvatar from "../../ChatAvatar";
import { getFullNameFromTitleAsObject } from "../../utils";

type ServiceDialogueCard = DialogueCardPropsBase & {
  title: string;
  providerTitle: string;
  serviceId?: string;
  datetime?: string;
};

const SupportDialogueCard: React.FC<ServiceDialogueCard> = ({
  title,
  providerTitle,
  serviceId,
  datetime,
  image,
  isActive,
  ...props
}) => {
  return (
    <BaseDialogueCard
      isActive={isActive}
      avatar={<ChatAvatar {...getFullNameFromTitleAsObject(title)} image={image} isLight={isActive} />}
      {...props}
    >
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
    </BaseDialogueCard>
  );
};

export default SupportDialogueCard;
