import React from "react";
import styles from "./ChatAvatar.module.scss";
import clsx from "clsx";
import { InitialsAvatar } from "../../InitialsAvatar";
import { RoundedImage } from "../../RoundedImage";

type ChatAvatarProps = {
  firstname: string;
  lastname: string;
  image?: string;
  isLight?: boolean;
  className?: string;
};

const ChatAvatar: React.FC<ChatAvatarProps> = ({ firstname, lastname, image, className, ...props }) => {
  return (
    <div className={clsx(styles.container, className)}>
      {image ? (
        <RoundedImage className={styles.image} alt={`${firstname} ${lastname}`} image={image} />
      ) : (
        <InitialsAvatar className={styles.initialsAvatar} firstname={firstname} lastname={lastname} {...props} />
      )}
    </div>
  );
};

export default ChatAvatar;
