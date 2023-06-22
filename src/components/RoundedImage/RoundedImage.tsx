import React, { memo } from "react";
import styles from "./RoundedImage.module.scss";
import clsx from "clsx";

type RoundedImageProps = {
  image: string;
  alt: string;
  className?: string;
};

const RoundedImage: React.FC<RoundedImageProps> = ({ image, alt = "", className }) => {
  return (
    <div className={clsx(styles.container, className)}>
      <img className={styles.image} src={image} alt={alt} />
    </div>
  );
};

export default memo(RoundedImage);
