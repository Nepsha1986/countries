import React from "react";
import { Select } from "@/ui";
import { Region } from "@/types/region";
interface Props
  extends Pick<React.ComponentProps<typeof Select>, "onSelect" | "value"> {}

const options: { value: Region | ""; label: string }[] = [
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
  {
    value: "",
    label: "All Regions",
  },
];
const RegionSelect = ({ onSelect, value }: Props) => (
  <Select
    style={{ width: "200px" }}
    value={value}
    options={options}
    onSelect={onSelect}
  />
);

export default RegionSelect;
