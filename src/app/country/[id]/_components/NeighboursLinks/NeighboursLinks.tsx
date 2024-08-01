import { LinkBtn } from "@/ui";

import styles from "./styles.module.scss";

interface Props {
  borders: string[] | [];
}
const NeighboursLinks = ({ borders }: Props) => {
  return (
    <div className={styles.neighboursLinks}>
      <h3 className={styles.neighboursLinks__title}>Border Countries:</h3>

      {!!borders.length ? (
        <ul className={styles.neighboursLinks__list}>
          {borders.map((item) => (
            <li className={styles.neighboursLinks__listItem} key={item}>
              <LinkBtn size="sm" href={`/country/${item.toLowerCase()}`}>
                {item}
              </LinkBtn>
            </li>
          ))}
        </ul>
      ) : (
        <span>The country has no neighbors.</span>
      )}
    </div>
  );
};

export default NeighboursLinks;
