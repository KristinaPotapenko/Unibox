import { FooterNavItem } from "./FooterNavItem/FooterNavItem";
import styles from "./FooterNav.module.scss";

export const FooterNav = () => {
  return (
    <ul className={styles.footerNav}>
      <FooterNavItem
        heading="CONTACT US"
        items={["+1 (844) 326-6000", "Email Us", "Mon-Fri 9am-3pm PT"]}
      />
      <FooterNavItem
        heading="CUSTOMERS"
        items={[
          "Start a Return",
          "Return Policy",
          "FAQ",
          "Catalogs and Mailers",
          "About Group Gifting",
        ]}
      />
      <FooterNavItem
        heading="COMPANY"
        items={[
          "About Us",
          "Sustainability",
          "Discover Revive",
          "Careers",
          "Privacy Policy",
          "Terms",
        ]}
      />
    </ul>
  );
};
