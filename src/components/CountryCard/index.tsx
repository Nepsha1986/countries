import React from "react";

import { Card, DefItem } from "@/ui";
import { formatNumber } from "@/utils/formatNumber";

interface Props {
  title: string;
  img: React.ReactNode;
  population: number;
  region: string;
  capital: string;
}

export const CountryCard = ({
  title,
  img,
  population,
  region,
  capital,
}: Props) => (
  <Card title={title} img={img}>
    <DefItem term="Population" def={formatNumber(population)} />
    <DefItem term="Region" def={region} />
    <DefItem term="Capital" def={capital} />
  </Card>
);
