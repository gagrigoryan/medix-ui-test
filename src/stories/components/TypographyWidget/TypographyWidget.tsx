import React, { memo } from "react";
import typographyStyles from "../../../styles/typography.module.scss";
import styles from "./TypographyWidget.module.scss";

type TypographyWidgetProps = {
  headingH1Text?: string;
  headingH2Text?: string;
  headingH3Text?: string;
  pMainText?: string;
  pSmallText?: string;
};

const TypographyWidget: React.FC<TypographyWidgetProps> = ({
  headingH1Text,
  headingH2Text,
  headingH3Text,
  pMainText,
  pSmallText,
}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h1 className={typographyStyles.headingH1}>{headingH1Text}</h1>
        </li>
      </ul>

      <ul className={styles.list}>
        <li className={styles.item}>
          <h2 className={typographyStyles.headingH2Light}>{headingH2Text}</h2>
        </li>
        <li className={styles.item}>
          <h2 className={typographyStyles.headingH2}>{headingH2Text}</h2>
        </li>
        <li className={styles.item}>
          <h2 className={typographyStyles.headingH2SemiBold}>{headingH2Text}</h2>
        </li>
        <li className={styles.item}>
          <h2 className={typographyStyles.headingH2Bold}>{headingH2Text}</h2>
        </li>
      </ul>

      <ul className={styles.list}>
        <li className={styles.item}>
          <h2 className={typographyStyles.headingH3ExtraLight}>{headingH3Text}</h2>
        </li>
        <li className={styles.item}>
          <h2 className={typographyStyles.headingH3}>{headingH3Text}</h2>
        </li>
        <li className={styles.item}>
          <h2 className={typographyStyles.headingH3SemiBold}>{headingH3Text}</h2>
        </li>
        <li className={styles.item}>
          <h2 className={typographyStyles.headingH3Bold}>{headingH3Text}</h2>
        </li>
      </ul>

      <ul className={styles.list}>
        <li className={styles.item}>
          <h2 className={typographyStyles.pMainExtraLight}>{pMainText}</h2>
        </li>
        <li className={styles.item}>
          <h2 className={typographyStyles.pMain}>{pMainText}</h2>
        </li>
        <li className={styles.item}>
          <h2 className={typographyStyles.pMainSemiBold}>{pMainText}</h2>
        </li>
        <li className={styles.item}>
          <h2 className={typographyStyles.pMainBold}>{pMainText}</h2>
        </li>
      </ul>

      <ul className={styles.list}>
        <li className={styles.item}>
          <h2 className={typographyStyles.pSmall}>{pSmallText}</h2>
        </li>
        <li className={styles.item}>
          <h2 className={typographyStyles.pSmallSemiBold}>{pSmallText}</h2>
        </li>
        <li className={styles.item}>
          <h2 className={typographyStyles.pSmallBold}>{pSmallText}</h2>
        </li>
      </ul>
    </div>
  );
};

export default memo(TypographyWidget);
