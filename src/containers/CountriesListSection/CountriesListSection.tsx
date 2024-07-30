"use client";

import { useState } from "react";

import { Search, Select } from "@/ui";
import CountriesList from "./containers/CountriesList";

import styles from "./styles.module.scss";

const CountriesListSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState("");

  return (
    <section className={styles.CountriesListSection}>
      <header className={styles.CountriesListSection__header}>
        <Search
          onSearch={setSearchQuery}
          placeholder={"Search for a country..."}
        />

        <Select
          placeholder="Filter by region"
          options={[{ value: "Asia", label: "Asia" }]}
          onSelect={setRegion}
        />
      </header>

      <div className={styles.CountriesListSection__main}>
        <CountriesList search={searchQuery} region={region} />
      </div>
    </section>
  );
};

export default CountriesListSection;
