import React, { memo } from "react";
import styles from "./MessageAvatar.module.scss";
import clsx from "clsx";
import { RoundedImage } from "../../../RoundedImage";

export type MessageAvatarProps = {
  image: string;
  alt?: string;
  className?: string;
};

const MessageAvatar: React.FC<MessageAvatarProps> = ({ image, alt = "", className }) => {
  return <RoundedImage className={clsx(styles.container, className)} image={image} alt={alt} />;
};

export default memo(MessageAvatar);
