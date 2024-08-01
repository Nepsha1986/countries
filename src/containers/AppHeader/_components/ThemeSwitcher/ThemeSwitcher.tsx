"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faAdjust } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";

type Theme = "light" | "dark" | "system";

const ThemeSwitcher = () => {
  const initialTheme = (Cookies.get("theme") as Theme) || "system";
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
      <button onClick={() => handleThemeChange("light")}>
        <FontAwesomeIcon icon={faSun} />
      </button>
      <button onClick={() => handleThemeChange("dark")}>
        <FontAwesomeIcon icon={faMoon} />
      </button>
      <button onClick={() => handleThemeChange("system")}>
        <FontAwesomeIcon icon={faAdjust} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
