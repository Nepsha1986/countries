import Logo from "./_components/Logo";
import ThemeSwitcher from "./_components/ThemeSwitcher";

import styles from "./styles.module.scss";
const AppHeader = () => {
  return (
    <header className={styles.appHeader}>
      <div className={styles.appHeader__container}>
        <Logo />

        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default AppHeader;
