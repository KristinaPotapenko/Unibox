import { Logo } from "../../ui/Logo/Logo";
import { NavigationMenu } from "../../ui/NavigationMenu/NavigationMenu";
import { HeaderLinks } from "./HeaderLinks/HeaderLinks";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavigationMenu />
      <HeaderLinks />
    </header>
  );
};
