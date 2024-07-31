import React from "react";

import styles from "./styles.module.scss";

export const DefItem = ({ term, def }) => {
  return (
    <div className={styles.defItem}>
      <span className={styles.defItem__term}>{term}: </span>
      <span className={styles.defItem__def}>{def}</span>
    </div>
  );
};
