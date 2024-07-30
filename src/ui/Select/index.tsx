import React from "react";

import styles from "./styles.module.scss";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  onSelect: (value: string) => void;
  placeholder?: string;
  width?: string;
}

const Select = ({
  options,
  placeholder = "Select...",
  onSelect,
  width = "180px",
}: SelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <div className={styles.select} style={{ width }}>
      <select className={styles.select__dropdown} onChange={handleChange}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Select };
