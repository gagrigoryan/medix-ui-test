import React from "react";
import styles from "./PopupFooterWithActions.module.scss";
import { FilledButton, OutlinedButton } from "../../Button";
import { PopupFooterWithActionsProps } from "../PopupProps";

const PopupFooterWithActions: React.FC<PopupFooterWithActionsProps> = ({
  buttonLabel,
  secondaryButtonLabel,
  onButtonClick,
  onSecondaryButtonClick,
  children,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>{children}</div>
      <div className={styles.actionWrapper}>
        <OutlinedButton onClick={onSecondaryButtonClick} className={styles.button} isColored>
          {secondaryButtonLabel}
        </OutlinedButton>
        <FilledButton onClick={onButtonClick} className={styles.button}>
          {buttonLabel}
        </FilledButton>
      </div>
    </div>
  );
};

export default PopupFooterWithActions;
