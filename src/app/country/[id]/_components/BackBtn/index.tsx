import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { LinkBtn } from "@/ui";

import styles from "./styles.module.scss";

export const BackBtn = () => (
  <LinkBtn className={styles.backBtn} href="/">
    <FontAwesomeIcon icon={faArrowLeft} />
    <span className={styles.backBtn__text}>Back</span>
  </LinkBtn>
);
