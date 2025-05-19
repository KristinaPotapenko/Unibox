import { NavigationItem } from "../NavigationItem/NavigationItem";
import styles from "./NavigationList.module.scss";

export const NavigationList = () => {
  return (
    <ul className={styles.list}>
      <NavigationItem text="Shop" />
      <NavigationItem text="New Arrivals" />
      <NavigationItem text="Sales" />
      <NavigationItem text="Journel" />
    </ul>
  );
};
