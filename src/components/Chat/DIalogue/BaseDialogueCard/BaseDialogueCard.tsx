import React from "react";
import styles from "./BaseDialogueCard.module.scss";
import clsx from "clsx";
import { Badge } from "../../../Badge";
import { DialogueCardPropsBase } from "../DialogueCardProps";

type BaseDialogueCardProps = DialogueCardPropsBase & {
  avatar: React.ReactNode;
  children?: React.ReactNode;
};

const BaseDialogueCard: React.FC<BaseDialogueCardProps> = ({ avatar, isActive, index, className, children }) => {
  return (
    <div className={clsx(styles.container, isActive && styles.containerActive, className)}>
      <div className={styles.contentWrapper}>
        <div className={styles.avatarWrapper}>{avatar}</div>
        {children}
      </div>
      {index && (
        <div className={styles.badgeWrapper}>
          <Badge value={index < 100 ? `${index}` : "99+"} />
        </div>
      )}
    </div>
  );
};

export default BaseDialogueCard;
