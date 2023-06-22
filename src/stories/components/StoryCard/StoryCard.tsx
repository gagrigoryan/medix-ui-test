import React from "react";
import styles from "./StoryCard.module.scss";
import clsx from "clsx";

type StoryCardProps = {
  isDense?: boolean;
  isDark?: boolean;
  children?: React.ReactNode;
};

const StoryCard: React.FC<StoryCardProps> = ({ isDark, isDense, children }) => (
  <div className={clsx(styles.container, isDark && styles.containerDark, isDense && styles.containerDense)}>
    {children}
  </div>
);

export default StoryCard;
