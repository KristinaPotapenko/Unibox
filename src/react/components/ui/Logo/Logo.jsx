import { Link } from "react-router-dom";
import LogoImage from "../../../../assets/images/logo.svg?react";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link to="/" className={styles.headerLink}>
      <LogoImage />
      <p>Unibox</p>
    </Link>
  );
};
