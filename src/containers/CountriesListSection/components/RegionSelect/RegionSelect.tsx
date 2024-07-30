import React from "react";
import { Select } from "@/ui";
import { Region } from "@/types/region";
interface Props extends Pick<React.ComponentProps<typeof Select>, "onSelect"> {}

const options: { value: Region; label: string }[] = [
  {
    value: "africa",
    label: "Africa",
  },
  {
    value: "antarctic",
    label: "Antarctic",
  },
  {
    value: "asia",
    label: "Asia",
  },
  {
    value: "europe",
    label: "Europe",
  },
  {
    value: "americas",
    label: "America",
  },
  {
    value: "oceania",
    label: "Oceania",
  },
];
const RegionSelect = ({ onSelect }: Props) => (
  <Select
    placeholder="Filter by region"
    options={options}
    onSelect={onSelect}
  />
);

export default RegionSelect;
