import React from "react";

import styles from "./styles.module.scss";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  onSelect: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Select...",
  onSelect,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <div className={styles.select}>
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
