import { NavigationLink } from "../../../../ui/NavigationMenu/NavigationLink/NavigationLink";
import styles from "./FooterNavLinks.module.scss";

export const FooterNavLinks = ({ items }) => {
  return (
    <div className={styles.links}>
      {items.map((item, index) => {
        return <NavigationLink key={index} text={item} size="small" />;
      })}
    </div>
  );
};
