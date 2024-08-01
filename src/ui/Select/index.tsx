import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.ComponentProps<"select">, "onSelect"> {
  value: string;
  options: Option[];
  onSelect: (value: string) => void;
  placeholder?: string;
  width?: string;
  ghost?: boolean;
  icon?: React.ReactNode;
}

const Select = ({
  value,
  options,
  placeholder,
  onSelect,
  width = "auto",
  ghost = false,
  icon,
  ...props
}: SelectProps) => {
  const classname = classNames(styles.select, {
    [styles.select_ghost]: ghost,
  });
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <div className={classname} style={{ width }}>
      {icon && <span className={styles.select__icon}>{icon}</span>}
      <select
        value={value}
        className={styles.select__dropdown}
        onChange={handleChange}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
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
