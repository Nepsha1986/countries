import React from "react";

import { Card } from "@/ui";

import styles from "./styles.module.scss";

interface Props {
  title: string;
  img: React.ReactNode;
  population: number;
  region: string;
  capital: string;
}

const DefItem = ({ term, def }) => {
  return (
    <div className={styles.defItem}>
      <span className={styles.defItem__term}>{term}: </span>
      <span className={styles.defItem__def}>{def}</span>
    </div>
  );
};

export const CountryCard = ({
  title,
  img,
  population,
  region,
  capital,
}: Props) => (
  <Card title={title} img={img}>
    <DefItem term="Population" def={population} />
    <DefItem term="Region" def={region} />
    <DefItem term="Capital" def={capital} />
  </Card>
);
