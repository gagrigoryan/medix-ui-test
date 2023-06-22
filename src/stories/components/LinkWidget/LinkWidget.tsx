import React, { memo } from "react";
import linkStyles from "../../../styles/link.module.scss";
import styles from "./LinkWidget.module.scss";
import clsx from "clsx";

type LinkWidgetProps = {
  text: string;
  isLight?: boolean;
};

const LinkWidget: React.FC<LinkWidgetProps> = ({ text, isLight }) => {
  return (
    <div className={clsx(styles.container, isLight && styles.containerLight)}>
      <p>
        <a className={clsx(linkStyles.mxLink, isLight && linkStyles.mxLinkLight)} href="#">
          {text}
        </a>{" "}
        в тексте
      </p>
    </div>
  );
};

export default memo(LinkWidget);
