import { SubscribeForm } from "../../forms/SubscribeForm/SubscribeForm";
import { FooterNav } from "./FooterNav/FooterNav";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className="section sectionGrayBg">
      <div className="container">
        <footer className={styles.footer}>
          <FooterNav />
          <SubscribeForm />
        </footer>
      </div>
    </div>
  );
};
