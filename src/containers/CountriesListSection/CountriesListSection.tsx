"use client";

import { useState } from "react";

import { Search } from "@/ui";
import { PartialCountryDTO } from "@/schemas";
import CountriesList from "./components/CountriesList";
import RegionSelect from "./components/RegionSelect";

import styles from "./styles.module.scss";

interface Props {
  countries: PartialCountryDTO[];
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
