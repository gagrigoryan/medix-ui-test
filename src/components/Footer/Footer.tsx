import React, { memo } from "react";
import styles from "./Footer.module.scss";
import { BrandLogo } from "../BrandLogo";
import clsx from "clsx";
import { OutlinedButton } from "../Button";

type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={clsx(styles.container, className)}>
      <div className={clsx(styles.wrapper, "mx-row")}>
        <div className="mx-col-2 mx-start-2">
          <BrandLogo isLight />
          <small className={styles.copyright}>Copyright Medixspace 2023</small>
        </div>
        <div className="mx-col-2 mx-start-5">
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a className={styles.link} href="#">
                About MediXSpace Platform
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.link} href="#">
                About company
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.link} href="#">
                Contact support
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-col-2 mx-start-8">
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a className={styles.link} href="#">
                Privacy policy
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.link} href="#">
                Terms of use
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.link} href="#">
                Become a medical provider
              </a>
            </li>
          </ul>
        </div>
        <div className={clsx(styles.buttonWrapper, "mx-col-2")}>
          <OutlinedButton isLight>Onboarding</OutlinedButton>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
