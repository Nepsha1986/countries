"use client";

import { Search, Select } from "@/ui";

import styles from "./styles.module.scss";
const CountriesListSection = () => {
  return (
    <section className={styles.CountriesListSection}>
      <header className={styles.CountriesListSection__header}>
        <Search />

        <Select options={[]} />
      </header>

      <div className={styles.CountriesListSection__main}>
        <h2>Countries goes here!</h2>
      </div>
    </section>
  );
};

export default CountriesListSection;
