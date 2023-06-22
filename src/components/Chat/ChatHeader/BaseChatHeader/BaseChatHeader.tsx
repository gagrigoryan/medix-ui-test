import React, { useState } from "react";
import styles from "./BaseChatHeader.module.scss";
import { IconButton } from "../../../Button";
import { CloseIcon, SearchIcon, StarIcon } from "../../../Icons";
import clsx from "clsx";
import { Input } from "../../../Input";
import { ChatHeaderPropsBase } from "../ChatHeaderProps";

type BaseChatHeaderProps = ChatHeaderPropsBase & {
  avatar: React.ReactNode;
  children?: React.ReactNode;
};

const BaseChatHeader: React.FC<BaseChatHeaderProps> = ({ avatar, className, children }) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.avatarWrapper}>{avatar}</div>
          {children}
        </div>
        <div className={styles.actionWrapper}>
          <IconButton className={styles.actionButton} icon={<StarIcon />} />
          <IconButton onClick={() => setExpanded(true)} className={styles.actionButton} icon={<SearchIcon />} />
        </div>
      </div>
      {isExpanded && (
        <div className={styles.searchWrapper}>
          <Input isClearable className={styles.searchInput} suffixIcon={<SearchIcon />} label="" />
          <IconButton onClick={() => setExpanded(false)} icon={<CloseIcon />} />
        </div>
      )}
    </div>
  );
};

export default BaseChatHeader;
