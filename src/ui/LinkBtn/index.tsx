import React from "react";
import Link from "next/link";
import classNames from "classnames";

import styles from "./styles.module.scss";

type BtnSize = "sm" | "md" | "lg";

interface Props extends React.ComponentProps<typeof Link> {
  href: string;
  children: React.ReactNode;
  size?: BtnSize;
}

export const LinkBtn = ({ children, href, size = "md", ...props }: Props) => {
  const classname = classNames(styles.linkBtn, {
    [styles[`linkBtn_${size}`]]: !!size,
  });

  return (
    <Link href={href} className={classname} {...props}>
      {children}
    </Link>
  );
};
