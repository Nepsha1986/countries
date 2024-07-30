import React from "react";

import styles from "./styles.module.scss";

interface Props {
  title: string;
  children: React.ReactNode;
  img?: React.ReactNode;
}
export const Card = ({ title, img, children }: Props) => {
  return (
    <div className={styles.card}>
      {img && <div className={styles.card__img}>{img}</div>}

      <div className={styles.card__inner}>
        <h2 className={styles.card__title}>{title}</h2>

        {children}
      </div>
    </div>
  );
};
