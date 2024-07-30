import React, { useState } from "react";

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
