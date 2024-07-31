import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

interface Props {
  href: string;
  children: React.ReactNode;
}

export const LinkBtn = ({ children, href }: Props) => {
  return (
    <Link href={href} className={styles.linkBtn}>
      {children}
    </Link>
  );
};
