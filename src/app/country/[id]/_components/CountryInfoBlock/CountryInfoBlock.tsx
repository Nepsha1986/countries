import React from "react";

import styles from "./styles.module.scss";

interface Props {
  heading: string;
  img: React.ReactNode;
  leftSlot: React.ReactNode;
  rightSlot: React.ReactNode;
  footer: React.ReactNode;
}

const CountryInfoBlock = ({
  img,
  heading,
  leftSlot,
  rightSlot,
  footer,
}: Props) => {
  return (
    <div className={styles.countryInfoBlock}>
      <div className={styles.countryInfoBlock__imgSlot}>{img}</div>

      <div>
        <h1 className={styles.countryInfoBlock__heading}>{heading}</h1>

        <div className={styles.countryInfoBlock__slotsArea}>
          <div className={styles.countryInfoBlock__leftSlot}>{leftSlot}</div>
          <div className={styles.countryInfoBlock__rightSlot}>{rightSlot}</div>
        </div>

        <footer>{footer}</footer>
      </div>
    </div>
  );
};

export default CountryInfoBlock;
