import Link from "next/link";
import { cookies } from "next/headers";

import Logo from "./_components/Logo";
import ThemeSwitcher from "./_components/ThemeSwitcher";

import styles from "./styles.module.scss";
const AppHeader = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  return (
    <header className={styles.appHeader}>
      <div className={styles.appHeader__container}>
        <Link href="/">
          <Logo />
        </Link>

        <ThemeSwitcher initialTheme={theme?.value} />
      </div>
    </header>
  );
};

export default AppHeader;
