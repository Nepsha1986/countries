"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faAdjust,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

import { Select } from "@/ui";
import { Theme } from "@/types/theme";

import styles from "./styles.module.css";

const iconMap = new Map<Theme, IconDefinition>([
  ["light", faSun],
  ["dark", faMoon],
  ["system", faAdjust],
]);

interface Props {
  initialTheme: Theme;
}
const ThemeSwitcher = ({ initialTheme }: Props) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    const applyTheme = (newTheme: Theme) => {
      if (newTheme === "system") {
        const darkModeMediaQuery = window.matchMedia(
          "(prefers-color-scheme: dark)",
        );
        const themeToApply = darkModeMediaQuery.matches ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", themeToApply);
      } else {
        document.documentElement.setAttribute("data-theme", newTheme);
      }
    };

    applyTheme(theme);
    Cookies.set("theme", theme, { expires: 365 });
  }, [theme]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <div className={styles.themeSwitcher}>
      <Select
        value={theme}
        icon={<FontAwesomeIcon icon={iconMap.get(theme) as IconDefinition} />}
        ghost
        defaultValue={initialTheme}
        onSelect={(value) => handleThemeChange(value as Theme)}
        options={[
          {
            value: "light",
            label: "Light",
          },
          {
            value: "dark",
            label: "Dark",
          },
          {
            value: "system",
            label: "System",
          },
        ]}
      />
    </div>
  );
};

export default ThemeSwitcher;
