import React from "react";

import styles from "./styles.module.scss";

interface Props {
  term: string;
  def: string | number;
}

export const DefItem = ({ term, def }: Props) => {
  return (
    <div className={styles.defItem}>
      <span className={styles.defItem__term}>{term}: </span>
      <span className={styles.defItem__def}>{def}</span>
    </div>
  );
};
