"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

interface Props {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const Search = ({ placeholder = "Search...", onSearch }: Props) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className={styles.search}>
      <span className={styles.search__icon}>
        <FontAwesomeIcon icon={faSearch} />
      </span>

      <input
        type="text"
        className={styles.search__input}
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export { Search };
