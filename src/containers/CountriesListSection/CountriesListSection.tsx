"use client";

import { useState } from "react";

import { Search, Select } from "@/ui";
import { CountryDTO } from "@/schemas";
import CountriesList from "@/containers/CountriesListSection/components/CountriesList";

import styles from "./styles.module.scss";
import RegionSelect from "@/containers/CountriesListSection/components/RegionSelect";

interface Props {
  countries: CountryDTO[];
}

const CountriesListSection = ({ countries }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState("");

  return (
    <section className={styles.CountriesListSection}>
      <header className={styles.CountriesListSection__header}>
        <Search
          onSearch={setSearchQuery}
          placeholder={"Search for a country..."}
        />

        <RegionSelect onSelect={setRegion} />
      </header>

      <div className={styles.CountriesListSection__main}>
        <CountriesList data={countries} search={searchQuery} region={region} />
      </div>
    </section>
  );
};

export default CountriesListSection;
