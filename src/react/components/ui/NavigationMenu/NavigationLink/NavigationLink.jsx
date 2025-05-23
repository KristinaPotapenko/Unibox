import { Link } from "react-router-dom";
import styles from "./NavigationLink.module.scss";

export const NavigationLink = ({ size, text, ...props }) => {
  return (
    <Link
      className={`${styles.link} ${size === "small" && styles.linkSmall}`}
      {...props}
    >
      {text}
    </Link>
  );
};
