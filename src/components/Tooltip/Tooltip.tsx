import React from "react";
import styles from "./Tooltip.module.scss";
import TooltipOverlay from "./TooltipOverlay";
import clsx from "clsx";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ReactTooltip = require("rc-tooltip").default;

type TooltipProps = {
  text: string;
  placement?: "top" | "bottom" | "left" | "right";
  children?: React.ReactElement;
  className?: string;
};

const Tooltip: React.FC<TooltipProps> = ({ text, placement = "top", children, className }) => {
  return (
    <div className={clsx(styles.container, className)}>
      <ReactTooltip
        trigger={["hover"]}
        placement={placement}
        mouseEnterDelay={0.4}
        overlayClassName={styles.overlayWrapper}
        overlay={<TooltipOverlay text={text} />}
        destroyTooltipOnHide
      >
        <div className={styles.contentWrapper}>{children}</div>
      </ReactTooltip>
    </div>
  );
};

export default Tooltip;
