import React, { memo } from "react";
import styles from "./TooltipWidget.module.scss";
import { Chip, Tooltip } from "../../../components";

const initialTooltipText = "Подсказка может занимать больше двух строк с текстом";

type TooltipWidgetProps = {
  text?: string;
};

const TooltipWidget: React.FC<TooltipWidgetProps> = ({ text = initialTooltipText }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Tooltip text={text} placement="left">
            <Chip value="Left" />
          </Tooltip>
        </li>
        <li>
          <Tooltip text={text} placement="top">
            <Chip value="Top" />
          </Tooltip>
        </li>
        <li>
          <Tooltip text={text} placement="bottom">
            <Chip value="Bottom" />
          </Tooltip>
        </li>
        <li>
          <Tooltip text={text} placement="right">
            <Chip value="Right" />
          </Tooltip>
        </li>
      </ul>
    </div>
  );
};

export default memo(TooltipWidget);
