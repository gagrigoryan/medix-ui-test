import React, { memo } from "react";
import styles from "./Header.module.scss";
import clsx from "clsx";
import { MenuTab } from "../Tab";
import { BrandLogo } from "../BrandLogo";
import { IconButton } from "../Button";
import { PersonIcon, USAIcon } from "../Icons";

type HeaderProps = {
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={clsx(styles.container, className)}>
      <div className={styles.wrapper}>
        <BrandLogo className={styles.brandLogo} />
        <div className={clsx(styles.menuWrapper, "mx-row")}>
          <div className="mx-col-10 mx-start-2">
            <nav className={styles.navigation}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <MenuTab value="Service" />
                </li>
                <li className={styles.listItem}>
                  <MenuTab value="Clinical trials" />
                </li>
                <li className={styles.listItem}>
                  <MenuTab value="Medical records" isActive />
                </li>
                <li className={styles.listItem}>
                  <MenuTab value="Orders" />
                </li>
                <li className={styles.listItem}>
                  <MenuTab value="Messages" index={1} />
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.actionWrapper}>
          <button className={styles.actionButton}>
            <span className={styles.actionButtonCurrency}>$</span>
            USD
          </button>
          <button className={styles.actionButton}>
            <USAIcon className={styles.actionButtonIcon} />
            EN
          </button>
          <IconButton icon={<PersonIcon />} />
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
