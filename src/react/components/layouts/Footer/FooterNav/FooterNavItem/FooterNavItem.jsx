import { FooterHeading } from "../../FooterHeading/FooterHeading";
import { FooterNavLinks } from "../FooterNavLinks/FooterNavLinks";
import styles from "./FooterNavItem.module.scss";

export const FooterNavItem = ({ heading, items }) => {
  return (
    <li className={styles.footerItem}>
      <FooterHeading>{heading}</FooterHeading>
      <FooterNavLinks items={items} />
    </li>
  );
};
