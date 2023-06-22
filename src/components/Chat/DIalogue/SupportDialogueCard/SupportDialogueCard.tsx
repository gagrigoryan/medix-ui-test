import React from "react";
import styles from "./SupportDialogueCard.module.scss";
import BaseDialogueCard from "../BaseDialogueCard";
import { DialogueCardPropsBase } from "../DialogueCardProps";
import ChatAvatar from "../../ChatAvatar";
import { getFullNameFromTitleAsObject } from "../../utils";

type SupportDialogueCard = DialogueCardPropsBase & {
  title: string;
  description: string;
};

const SupportDialogueCard: React.FC<SupportDialogueCard> = ({ title, description, image, isActive, ...props }) => {
  return (
    <BaseDialogueCard
      isActive={isActive}
      avatar={<ChatAvatar {...getFullNameFromTitleAsObject(title)} image={image} isLight={isActive} />}
      {...props}
    >
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{description}</p>
      </div>
    </BaseDialogueCard>
  );
};

export default SupportDialogueCard;
