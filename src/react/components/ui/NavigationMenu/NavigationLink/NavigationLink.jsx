import { Link } from "react-router-dom";
import styles from "./NavigationLink.module.scss";

export const NavigationLink = ({ text, ...props }) => {
  return (
    <Link className={styles.link} {...props}>
      {text}
    </Link>
  );
};
